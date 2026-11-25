"use client";

/*
 * Slow, endless photo carousel. Ported from liubruce.me's InfiniteSlider
 * (github.com/xybruceliu/brucespage, MIT): the children are rendered twice in one row and the
 * row slides left forever, wrapping after one copy. It slows on hover, can be dragged/flicked,
 * stops while something inside has keyboard focus, and holds still with reduced motion.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, type PanInfo } from "motion/react";
import "./infinite-slider.css";

type Props = {
  children: React.ReactNode;
  /** px per second */
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
  "aria-label": string;
};

const FOCUSABLE = "a[href], button, input, select, textarea, [tabindex]";

export default function InfiniteSlider({
  children,
  speed = 30,
  speedOnHover = 10,
  gap = 16,
  className = "",
  "aria-label": ariaLabel,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const x = useMotionValue(0);
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();
  const dragged = useRef(false);

  const target = reduceMotion || focused ? 0 : -(hovered ? speedOnHover : speed);
  const velocity = useRef(target);

  // Track width, without a measuring library.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(([entry]) => {
      widthRef.current = entry.contentRect.width;
    });
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  // The second copy only makes the loop seamless: hide it from assistive tech and the tab order.
  useEffect(() => {
    const clone = cloneRef.current;
    if (!clone) return;
    for (const child of Array.from(clone.children)) child.setAttribute("aria-hidden", "true");
    clone.querySelectorAll(FOCUSABLE).forEach((el) => el.setAttribute("tabindex", "-1"));
  });

  useAnimationFrame((_, delta) => {
    if (dragging || !widthRef.current) return;
    const loop = (widthRef.current + gap) / 2; // one copy + its gap
    const diff = target - velocity.current;
    velocity.current = Math.abs(diff) > 0.5 ? velocity.current + diff * 0.05 : target;
    let next = x.get() + velocity.current * (delta / 1000);
    if (next < -loop) next += loop;
    else if (next > 0 && !focused) next -= loop;
    x.set(next);
  });

  // Keep a keyboard-focused item fully in view by sliding the track (not scrolling the box).
  const reveal = (el: HTMLElement) => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    container.scrollLeft = 0;
    const pad = 16;
    const offset = el.getBoundingClientRect().left - track.getBoundingClientRect().left;
    const size = el.getBoundingClientRect().width;
    let next = x.get();
    if (next + offset < pad) next = pad - offset;
    else if (next + offset + size > container.clientWidth - pad) next = container.clientWidth - pad - offset - size;
    x.set(next);
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      className={`slider ${className}`}
      onScroll={() => {
        const active = document.activeElement;
        if (active instanceof HTMLElement && trackRef.current?.contains(active)) reveal(active);
        else if (containerRef.current) containerRef.current.scrollLeft = 0;
      }}
    >
      <motion.div
        ref={trackRef}
        className="slider__track"
        style={{ x, gap }}
        drag="x"
        dragMomentum={false}
        onDragStart={() => {
          dragged.current = true;
          setDragging(true);
        }}
        onDragEnd={(_: unknown, info: PanInfo) => {
          setDragging(false);
          velocity.current = info.velocity.x; // eases back to cruising speed
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onFocus={(e) => {
          const el = e.target as HTMLElement;
          if (!el.matches(":focus-visible")) return;
          velocity.current = 0;
          setFocused(true);
          reveal(el);
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
        }}
        onPointerDownCapture={() => {
          dragged.current = false;
        }}
        onClickCapture={(e) => {
          if (dragged.current) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {children}
        <div ref={cloneRef} className="slider__clone">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
