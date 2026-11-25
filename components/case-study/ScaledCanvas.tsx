"use client";

/*
 * Fixed-size design canvas (e.g. a 1019×400 Figma card) scaled down to fit its column.
 * Children are laid out in design pixels inside the stage; the stage is scaled by
 * width / design width so mockups keep their exact proportions at every viewport.
 */
import { useEffect, useRef } from "react";
import "./scaled-canvas.css";

type Props = {
  /** Design width in px (the Figma frame width). */
  width: number;
  /** Design height in px. */
  height: number;
  /** Accessible description; the canvas is exposed as a single image. */
  label: string;
  className?: string;
  children: React.ReactNode;
};

export default function ScaledCanvas({ width, height, label, className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => el.style.setProperty("--cs-scale", String(el.getBoundingClientRect().width / width));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={ref}
      className={className ? `cs-canvas ${className}` : "cs-canvas"}
      style={{ aspectRatio: `${width} / ${height}` }}
      role="img"
      aria-label={label}
    >
      <div className="cs-canvas__stage" style={{ width, height }}>
        {children}
      </div>
    </div>
  );
}
