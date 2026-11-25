"use client";

/** Eased wheel / trackpad scrolling for the whole site (Lenis). Off with prefers-reduced-motion. */
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { getLenis, setLenis } from "@/lib/smooth-scroll";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const start = () => {
      if (lenis || media.matches) return;
      // `anchors` eases in-page links such as the nav's "Connect" (#connect).
      lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
      setLenis(lenis);
    };
    const stop = () => {
      lenis?.destroy();
      lenis = null;
      setLenis(null);
    };
    const onChange = () => (media.matches ? stop() : start());

    start();
    media.addEventListener("change", onChange);
    return () => {
      media.removeEventListener("change", onChange);
      stop();
    };
  }, []);

  // New page: drop any glide left over from the previous one and re-measure the page height.
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    if (!window.location.hash) lenis.scrollTo(0, { immediate: true, force: true });
    lenis.resize();
  }, [pathname]);

  return null;
}
