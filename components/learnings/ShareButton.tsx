"use client";

import { useEffect, useRef, useState } from "react";
import { PiShareNetworkLight } from "react-icons/pi";
import "./share-button.css";

/**
 * Share icon in the byline (Figma 1001:17115, Font Awesome Light "share-nodes").
 * Touch devices get the native share sheet; everything else copies the URL.
 */
export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = async () => {
    const url = window.location.href;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    if (coarse && typeof navigator.share === "function") {
      try {
        await navigator.share({ title: document.title, url });
        return;
      } catch (err) {
        if ((err as DOMException).name === "AbortError") return;
        // Fall through to copying.
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked; nothing sensible to do.
    }
  };

  return (
    <button type="button" className="ln-share" onClick={onClick} aria-label="Share this article">
      <PiShareNetworkLight className="ln-share__icon" aria-hidden="true" />
      <span className={`ln-share__status${copied ? " is-visible" : ""}`} aria-hidden="true">
        Copied
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Link copied" : ""}
      </span>
    </button>
  );
}
