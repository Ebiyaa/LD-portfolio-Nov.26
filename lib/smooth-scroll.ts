import type Lenis from "lenis";

/** The page's Lenis instance (set by components/motion/SmoothScroll), or null with reduced motion. */
let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}

/** Scroll to an element, eased through Lenis when it's running. */
export function scrollToElement(el: HTMLElement) {
  const lenis = instance;
  if (lenis) {
    const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    lenis.scrollTo(el, { offset: -margin });
    return;
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
