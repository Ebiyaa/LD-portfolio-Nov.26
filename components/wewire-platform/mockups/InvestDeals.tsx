/* eslint-disable @next/next/no-img-element */
import "./invest-deals.css";
import type { ReactNode } from "react";
import ScaledCanvas from "@/components/case-study/ScaledCanvas";

/*
 * Mockup card (Figma 1001:14941, "Variant 3"): WeWire issuer "Invest" screen.
 * Laid out in design pixels (1019×400); the 818px-wide app frame runs off the
 * bottom of the card and is clipped. Font Awesome glyphs from the design are
 * drawn as small inline line icons (the icon font isn't available here).
 */

const A = "/assets/wewire-platform/invest";

type IconName =
  | "pie"
  | "exchange"
  | "card"
  | "line-chart"
  | "coin"
  | "folders"
  | "folder-tree"
  | "user"
  | "receipt"
  | "people"
  | "gear"
  | "chevron-down"
  | "search"
  | "alert";

const ICON_PATHS: Record<IconName, ReactNode> = {
  pie: (
    <>
      <path d="M21.2 15.9A10 10 0 1 1 8 2.8" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </>
  ),
  exchange: (
    <>
      <path d="m16 3 4 4-4 4" />
      <path d="M20 7H4" />
      <path d="m8 21-4-4 4-4" />
      <path d="M4 17h16" />
    </>
  ),
  card: (
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path d="M2 10h20" />
    </>
  ),
  "line-chart": (
    <>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </>
  ),
  coin: (
    <>
      <ellipse cx="12" cy="8" rx="8" ry="4" />
      <path d="M4 8v8c0 2.2 3.6 4 8 4s8-1.8 8-4V8" />
      <path d="M12 12v8" />
    </>
  ),
  folders: (
    <>
      <path d="M8 17h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-5.5l-2-2H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" />
      <path d="M2 8v11a2 2 0 0 0 2 2h14" />
    </>
  ),
  "folder-tree": (
    <>
      <path d="M13 3h2l1.5 2H20a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M13 14h2l1.5 2H20a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z" />
      <path d="M3 3v13a2 2 0 0 0 2 2h4" />
      <path d="M3 5a2 2 0 0 0 2 2h4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </>
  ),
  receipt: (
    <>
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8H8" />
      <path d="M16 12H8" />
      <path d="M13 16H8" />
    </>
  ),
  people: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  gear: (
    <>
      <path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.3a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.3a2 2 0 0 1 1 1.7v.2a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.3a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.3a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7.5" />
      <path d="m20.5 20.5-4.2-4.2" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="11" fill="currentColor" stroke="none" />
      <path d="M12 6.5v7" stroke="#fff" strokeWidth="2.6" />
      <circle cx="12" cy="17.3" r="1.5" fill="#fff" stroke="none" />
    </>
  ),
};

function Icon({ name, size, weight = 1.8 }: { name: IconName; size: number; weight?: number }) {
  return (
    <svg
      className="wp-invest__icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

type NavItem = {
  icon: IconName;
  label: string;
  sub?: boolean;
  active?: boolean;
  selected?: boolean;
  arrow?: "muted" | "dark";
};

const NAV: NavItem[] = [
  { icon: "pie", label: "Dashboard" },
  { icon: "exchange", label: "Payments", arrow: "muted" },
  { icon: "card", label: "Cards" },
  { icon: "line-chart", label: "Invest", active: true, arrow: "dark" },
  { icon: "coin", label: "Investor", sub: true },
  { icon: "folders", label: "Issuer", sub: true, selected: true },
  { icon: "folder-tree", label: "Sub-customers" },
  { icon: "user", label: "Beneficiaries" },
  { icon: "receipt", label: "Invoicing" },
  { icon: "people", label: "Teams" },
  { icon: "gear", label: "Settings" },
];

const STATS = [
  { label: "Total deal value", value: "$1,342,980", cents: ".72" },
  { label: "Due at maturity", value: "$1,742,000", cents: ".72" },
  { label: "Repaid till date", value: "$80,142", cents: ".72" },
  { label: "Outstanding", value: "$1, 669,142", cents: ".72" },
];

type Deal = {
  logo: string;
  logoW: number;
  type: string;
  badge: "funded" | "subscribing" | "open";
  ringBg: string;
  /** Progress arc; "none" is the design's empty Line layer. */
  line: "none" | "20" | "50";
  pct: string;
  pctNarrow?: boolean;
  raised: string;
};

const BADGE_LABEL = { funded: "Fully funded", subscribing: "Subscribing", open: "Open" };

const DEALS: Deal[] = [
  { logo: "deal-logo-1.png", logoW: 17.312, type: "Import facility", badge: "funded", ringBg: "ring-bg-full.svg", line: "none", pct: "100%", raised: "$1,890,000" },
  { logo: "deal-logo-2.svg", logoW: 17.311, type: "Import facility", badge: "subscribing", ringBg: "ring-bg.svg", line: "20", pct: "20%", raised: "$534,786" },
  { logo: "deal-logo-3.png", logoW: 17.312, type: "Agri export", badge: "open", ringBg: "ring-bg.svg", line: "none", pct: "0%", pctNarrow: true, raised: "$0" },
  { logo: "deal-logo-4.svg", logoW: 17.312, type: "Agri export", badge: "open", ringBg: "ring-bg.svg", line: "none", pct: "0%", pctNarrow: true, raised: "$0" },
  { logo: "deal-logo-5.png", logoW: 17.311, type: "Import facility", badge: "subscribing", ringBg: "ring-bg-half.svg", line: "50", pct: "50%", raised: "$945,000" },
  { logo: "deal-logo-6.svg", logoW: 17.312, type: "Agri export", badge: "open", ringBg: "ring-bg.svg", line: "none", pct: "0%", pctNarrow: true, raised: "$0" },
];

function RingLine({ line }: { line: Deal["line"] }) {
  if (line === "20") {
    return <img className="wp-invest__ring-line wp-invest__ring-line--20" src={`${A}/ring-line-20.svg`} width={9.084} height={7.044} alt="" />;
  }
  if (line === "50") {
    return <img className="wp-invest__ring-line wp-invest__ring-line--50" src={`${A}/ring-line-50.svg`} width={9.468} height={17.312} alt="" />;
  }
  return <img className="wp-invest__ring-line wp-invest__ring-line--none" src={`${A}/ring-line.svg`} width={32} height={32} alt="" />;
}

function Sidebar() {
  return (
    <div className="wp-invest__sidebar">
      <div className="wp-invest__menu-header">
        <div className="wp-invest__menu-header-inner">
          <div className="wp-invest__logo-text">
            <img className="wp-invest__logo-mark" src={`${A}/logo-mark.svg`} width={20.89} height={12.987} alt="" />
            <img className="wp-invest__logo-word" src={`${A}/logo-text.svg`} width={49.434} height={9.934} alt="" />
          </div>
        </div>
        <div className="wp-invest__nav-divider" />
      </div>

      <div className="wp-invest__account">
        <img className="wp-invest__avatar" src={`${A}/avatar.jpg`} width={17.312} height={17.312} alt="" />
        <div className="wp-invest__account-text">
          <span className="wp-invest__account-name">Feather Dev</span>
          <span className="wp-invest__account-balance">GHS 54,346.89</span>
        </div>
        <img src={`${A}/chevron-down.svg`} width={10.82} height={10.82} alt="" />
      </div>

      <div className="wp-invest__nav-divider" />

      <ul className="wp-invest__nav">
        {NAV.map((item) => {
          const cls = [
            "wp-invest__nav-item",
            item.sub && "wp-invest__nav-item--sub",
            item.active && "wp-invest__nav-item--active",
            item.selected && "wp-invest__nav-item--selected",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <li key={item.label} className={cls}>
              <span className="wp-invest__nav-main">
                <span className="wp-invest__nav-icon">
                  <Icon name={item.icon} size={7.574} weight={1.7} />
                </span>
                <span className="wp-invest__nav-label">{item.label}</span>
              </span>
              {item.arrow && (
                <span className={`wp-invest__nav-arrow wp-invest__nav-arrow--${item.arrow}`}>
                  <Icon name="chevron-down" size={6.492} weight={2.4} />
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const ACTIONS = [{ label: "Deposit", primary: true }, { label: "Send" }, { label: "Convert" }];

function PageHeader() {
  return (
    <div className="wp-invest__page-header">
      <div className="wp-invest__page-header-row">
        <p className="wp-invest__title">Invest</p>
        <div className="wp-invest__actions">
          {ACTIONS.map((b) => (
            <span key={b.label} className={`wp-invest__btn${b.primary ? " wp-invest__btn--primary" : ""}`}>
              {/* empty leading/trailing icon slots, as in the design */}
              <span />
              {b.label}
              <span />
            </span>
          ))}
        </div>
      </div>
      <img className="wp-invest__divider" src={`${A}/divider.svg`} width={636.222} height={0.541} alt="" />
    </div>
  );
}

function Stats() {
  return (
    <div className="wp-invest__stats">
      <div className="wp-invest__stat wp-invest__stat--first">
        <span className="wp-invest__stat-label">Issued deals</span>
        <span className="wp-invest__stat-value">13</span>
      </div>
      {STATS.map((s) => (
        <div key={s.label} className="wp-invest__stat-group">
          <span className="wp-invest__stat-divider">
            <img src={`${A}/stat-divider.svg`} width={63.298} height={0.541} alt="" />
          </span>
          <div className="wp-invest__stat">
            <span className="wp-invest__stat-label">{s.label}</span>
            <span className="wp-invest__stat-value">
              {s.value}
              <span className="wp-invest__stat-cents">{s.cents}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Alert() {
  return (
    <div className="wp-invest__alert">
      <div className="wp-invest__alert-body">
        <span className="wp-invest__alert-icon">
          <Icon name="alert" size={8.656} />
        </span>
        <div className="wp-invest__alert-text">
          <p className="wp-invest__alert-title">Repayment of 20,591.78 USDC is due today</p>
          <p className="wp-invest__alert-sub">Late fees may apply to delayed repayments</p>
        </div>
      </div>
      <span className="wp-invest__alert-link">View deal</span>
      <span className="wp-invest__alert-link wp-invest__alert-link--brand">Repay now</span>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="wp-invest__toolbar">
      <div className="wp-invest__toggle">
        <span className="wp-invest__toggle-item wp-invest__toggle-item--active">My deals</span>
        <span className="wp-invest__toggle-item">Repayments</span>
      </div>
      <div className="wp-invest__filters">
        <div className="wp-invest__search">
          <span className="wp-invest__search-icon">
            <Icon name="search" size={7.574} weight={1.9} />
          </span>
          <span className="wp-invest__search-text">Search</span>
        </div>
        <div className="wp-invest__filter-set">
          <div className="wp-invest__filter">
            <span className="wp-invest__filter-base wp-invest__filter-base--sector">
              Sector
              <Icon name="chevron-down" size={7.574} />
            </span>
          </div>
          <div className="wp-invest__filter">
            <span className="wp-invest__filter-base">
              Deal type
              <Icon name="chevron-down" size={7.574} />
            </span>
          </div>
          <div className="wp-invest__filter">
            <span className="wp-invest__filter-base">
              <span className="wp-invest__currency">
                <img src={`${A}/flag-ghs.svg`} width={10.82} height={10.82} alt="" />
                GHS
              </span>
              <Icon name="chevron-down" size={7.574} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DealGrid() {
  return (
    <div className="wp-invest__deals">
      {DEALS.map((d) => (
        <div key={d.logo} className="wp-invest__deal">
          <div className="wp-invest__deal-top">
            <div className="wp-invest__deal-id">
              <img src={`${A}/${d.logo}`} width={d.logoW} height={17.313} alt="" />
              <div className="wp-invest__deal-names">
                <span className="wp-invest__deal-name">Accra Solar Note</span>
                <span className="wp-invest__deal-type">{d.type}</span>
              </div>
            </div>
            <span className={`wp-invest__badge wp-invest__badge--${d.badge}`}>{BADGE_LABEL[d.badge]}</span>
          </div>
          <div className="wp-invest__deal-bottom">
            <div className="wp-invest__deal-target">
              <span className="wp-invest__deal-target-label">Target raise</span>
              <span className="wp-invest__deal-target-value">$1,890,000</span>
            </div>
            <div className="wp-invest__deal-progress">
              <div className="wp-invest__ring">
                <div className="wp-invest__ring-inner">
                  <img className="wp-invest__ring-bg" src={`${A}/${d.ringBg}`} width={17.312} height={17.312} alt="" />
                  <div className="wp-invest__ring-line-box">
                    <RingLine line={d.line} />
                  </div>
                  <span className={`wp-invest__ring-pct${d.pctNarrow ? " wp-invest__ring-pct--narrow" : ""}`}>{d.pct}</span>
                </div>
              </div>
              <div className="wp-invest__raised">
                <span className="wp-invest__raised-amount">{d.raised}</span>
                <span className="wp-invest__raised-label">raised</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function InvestDeals() {
  return (
    <ScaledCanvas width={1019} height={400} label="WeWire Invest screen listing issued deals" className="wp-invest">
      <div className="wp-invest__card">
        <div className="wp-invest__border" />
        <img className="wp-invest__bg" src={`${A}/bg.jpg`} width={1019} height={400} alt="" />
        <div className="wp-invest__app">
          <div className="wp-invest__main">
            <PageHeader />
            <div className="wp-invest__body">
              <Stats />
              <Alert />
              <Toolbar />
              <DealGrid />
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </ScaledCanvas>
  );
}
