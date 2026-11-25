"use client";

/*
 * Case-study table of contents: highlights the section currently in view
 * (IntersectionObserver) and smooth-scrolls to a section on click.
 */
import { useEffect, useState } from "react";
import { scrollToElement } from "@/lib/smooth-scroll";

export type TocItem = { id: string; label: string };

export default function Toc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // The active section is the last one whose top has passed the reading line (45% down the
    // viewport). The observer fires whenever a section's visible share changes, so the choice is
    // re-made as sections scroll in and out (even on big jumps); at the very bottom of the page
    // the last section wins even if it never reaches the line.
    const pick = () => {
      const line = window.innerHeight * 0.45;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = sections[0];
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el;
      }
      if (atBottom) current = sections[sections.length - 1];
      setActive(current.id);
    };

    const observer = new IntersectionObserver(pick, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach((el) => observer.observe(el));

    // Cheap check for reaching / leaving the bottom of the page, which the observer can't see.
    let frame = 0;
    let wasAtBottom = false;
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom === wasAtBottom) return;
      wasAtBottom = atBottom;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(pick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    pick();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    scrollToElement(target);
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <nav className="cs-toc" aria-label="On this page">
      <ul className="cs-toc__list">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="cs-toc__link"
              aria-current={active === id ? "location" : undefined}
              title={label}
              onClick={(e) => onClick(e, id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
