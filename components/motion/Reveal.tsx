"use client";

/*
 * Entrance motion for the whole site, after liubruce.me: text blocks blur-fade-rise in
 * (opacity 0, 20px down, blur 8px → settled; 0.6s ease-out-quart), staggered when several
 * arrive together — so the first screen plays as a loading sequence and the rest as you scroll.
 *
 * Design snippets (project visuals, mockups, photos) instead get a scroll-linked rise/scale
 * in CSS (app/motion.css, `animation-timeline: view()`); browsers without scroll-driven
 * animations fall back to the same one-off reveal as text.
 *
 * The elements are picked by selector, so pages don't need wrappers. State lives in a
 * `data-reveal` attribute (React never touches it) and is removed once the element is in,
 * which hands its own hover transitions back.
 */
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const SCOPE = "main, #connect";

/** Pictures of designs: scroll-linked in CSS. Keep in sync with app/motion.css. */
export const SNIPPETS = [
  ".home-projects__visual",
  ".cs-canvas",
  ".ds-hero",
  ".ds-tile:not(.ds-strip__tile)",
  ".ds-card",
  ".ds-film",
  ".about-featured__frame",
  ".ln-cover",
].join(", ");

/** Text and small UI blocks that fade in. */
const TEXT = [
  "h1", "h2", "h3", "h4", "p", "li", "dl", "blockquote", "figcaption",
  ".hero-actions__buttons", ".hero-actions__rating", ".slider",
].join(", ");

/** Never animate inside these (mockups are pictures; slider items move on their own). */
const SKIP = ".home-mock, .cs-canvas, .slider, .preview-link__content, [data-no-reveal]";

const STAGGER_MS = 70;
const MAX_STAGGER = 8;

function collect(root: ParentNode, scrollDriven: boolean) {
  const snippets = new Set<Element>(root.querySelectorAll(SNIPPETS));
  const picked: { el: HTMLElement; kind: "text" | "snippet" }[] = [];
  const chosen = new Set<Element>();

  for (const el of root.querySelectorAll<HTMLElement>(`${TEXT}, ${SNIPPETS}`)) {
    const isSnippet = snippets.has(el);
    // Skip anything inside a picture/slider, or inside an element we already animate.
    const parent = el.parentElement;
    if (parent?.closest(SKIP) && !isSnippet) continue;
    let ancestor = parent;
    let nested = false;
    while (ancestor) {
      if (chosen.has(ancestor)) { nested = true; break; }
      ancestor = ancestor.parentElement;
    }
    if (nested) continue;
    if (isSnippet && scrollDriven) {
      el.dataset.snippet = "";
      continue;
    }
    chosen.add(el);
    picked.push({ el, kind: isSnippet ? "snippet" : "text" });
  }
  return picked;
}

export default function Reveal() {
  const pathname = usePathname();

  // Layout effect: hide this page's blocks before the browser paints it.
  useLayoutEffect(() => {
    const html = document.documentElement;
    const done = () => delete html.dataset.revealPending;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      done();
      return;
    }

    const scrollDriven = CSS.supports("animation-timeline: view()");
    const roots = document.querySelectorAll(SCOPE);
    const targets = [...roots].flatMap((root) => collect(root, scrollDriven));
    for (const { el } of targets) el.dataset.reveal = "hidden";
    done();

    const timers = new Set<number>();
    const settle = (el: HTMLElement) => {
      el.dataset.reveal = "shown";
      const t = window.setTimeout(() => {
        delete el.dataset.reveal;
        el.style.removeProperty("--reveal-delay");
        timers.delete(t);
      }, 1200);
      timers.add(t);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const arriving = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
        arriving.forEach((el, i) => {
          observer.unobserve(el);
          el.style.setProperty("--reveal-delay", `${Math.min(i, MAX_STAGGER) * STAGGER_MS}ms`);
          // Next frame, so the hidden state is painted first and the transition runs.
          requestAnimationFrame(() => settle(el));
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const { el } of targets) observer.observe(el);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
      for (const { el } of targets) {
        delete el.dataset.reveal;
        el.style.removeProperty("--reveal-delay");
      }
    };
  }, [pathname]);

  return null;
}
