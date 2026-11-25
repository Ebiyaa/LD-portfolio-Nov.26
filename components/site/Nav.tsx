"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.css";

const ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Ebi", href: "/about" },
  // Switched off for now; the page lives in app/_learnings.
  // { label: "Learnings", href: "/learnings" },
];

/** Floating pill nav (Figma "After-Scroll"), fixed at the top of every page. */
export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <nav className="nav__pill" aria-label="Main">
        <Link href="/" className="nav__avatar" aria-label="Ebi-Yaa Kwaw, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/shared/avatar.png" alt="" width={40} height={40} />
        </Link>
        <ul className="nav__items">
          {ITEMS.map((item) => {
            const active = item.href === pathname;
            return (
              <li key={item.label}>
                <Link href={item.href} className="nav__item" aria-current={active ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a href="#connect" className="nav__cta">
          Connect
        </a>
      </nav>
    </header>
  );
}
