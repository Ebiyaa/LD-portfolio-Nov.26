import Link from "next/link";
import Toc, { type TocItem } from "./Toc";
import "./case-study.css";

type Props = {
  toc: TocItem[];
  /** Width of the divider/TOC column in the sidebar (Figma: 170 on WeWire, 227 on Delegated Self). */
  tocWidth?: number;
  className?: string;
  children: React.ReactNode;
};

/** Two-column case-study shell: sticky sidebar (back link + TOC) and the content column. */
export default function CaseStudyLayout({ toc, tocWidth = 170, className, children }: Props) {
  return (
    <div className={className ? `cs-page ${className}` : "cs-page"}>
      <aside className="cs-sidebar" style={{ "--cs-toc-width": `${tocWidth}px` } as React.CSSProperties}>
        <div className="cs-sidebar__inner">
          <Link href="/" className="cs-back">
            <svg className="cs-back__icon" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M11 6H1.5M5.5 1.75 1.25 6l4.25 4.25" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
          <hr className="cs-sidebar__rule" />
          <Toc items={toc} />
        </div>
      </aside>
      <article className="cs-main">{children}</article>
    </div>
  );
}
