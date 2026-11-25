import "./hero-overview.css";
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import type { IconType } from "react-icons";
import {
  LuArrowDownLeft,
  LuArrowLeftRight,
  LuArrowUpRight,
  LuChartLine,
  LuChartPie,
  LuChevronDown,
  LuCirclePlay,
  LuEyeOff,
  LuFolderTree,
  LuGift,
  LuHeadset,
  LuLogOut,
  LuPlus,
  LuReceipt,
  LuRefreshCw,
  LuSettings,
  LuUser,
  LuUsers,
} from "react-icons/lu";
import ScaledCanvas from "@/components/case-study/ScaledCanvas";

/*
 * Mockup card (Figma 1001:14528): background photo + "Overview" dashboard frame (1001:14530).
 * Font Awesome Pro glyphs from the design are rendered with the closest lucide icons.
 */

const A = "/assets/wewire-platform/hero";

const NAV: { icon: IconType; label: string; active?: boolean }[] = [
  { icon: LuChartPie, label: "Dashboard", active: true },
  { icon: LuArrowLeftRight, label: "Payments" },
  { icon: LuChartLine, label: "Invest" },
  { icon: LuFolderTree, label: "Sub-customers" },
  { icon: LuUser, label: "Beneficiaries" },
  { icon: LuReceipt, label: "Invoicing" },
  { icon: LuUsers, label: "Teams" },
  { icon: LuSettings, label: "Settings" },
];

const NAV_FOOT: { icon: IconType; label: string }[] = [
  { icon: LuCirclePlay, label: "Take a tour" },
  { icon: LuHeadset, label: "Support" },
  { icon: LuLogOut, label: "Logout" },
];

const WALLETS = [
  { icon: "flag-usd.svg", code: "USD", amount: "$ 1,300,876.08", chev: "chev-0.svg" },
  { icon: "usdt.svg", code: "USDT", amount: "$ 1,200,876.08", chev: "chev-1.svg" },
  { icon: "flag-gbp.svg", code: "GBP", amount: "$ 700,876.08", chev: "chev-2.svg" },
  { icon: "flag-ghs.svg", code: "GHS", amount: "$ 500,876.08", chev: "chev-3.svg" },
];

const STATS = [
  { label: "Deposits", whole: "$ 34,786" },
  { label: "Withdrawals", whole: "$ 4,786" },
  { label: "Sub-customer balance", whole: "$ 12,786" },
  { label: "Total investment", whole: "$ 3,786" },
];

const DEALS = [
  { icon: "deal-icon-1.svg", badge: "Fully funded", tone: "green", meta: "12.5% P.A. SIMPLE . 9 mo . $230 k" },
  { icon: "deal-icon-2.svg", badge: "Subscribing", tone: "yellow", meta: "12.5% P.A. SIMPLE . 9 mo . $230 k raised" },
  { icon: "deal-icon-3.svg", badge: "Open", tone: "blue", meta: "12.5% P.A. SIMPLE . 9 mo . $230 k raised" },
];

const X_AXIS = ["Sep 28", "Sep 29", "Sep 30", "Oct 1", "Oct 2", "Oct 3", "Oct 4"];
const Y_LINES = [
  "y-axis-line-0.svg",
  "y-axis-line-1.svg",
  "y-axis-line-1.svg",
  "y-axis-line-3.svg",
  "y-axis-line-1.svg",
  "y-axis-line-1.svg",
];

type TxProps = {
  tone: "green" | "red" | "blue";
  icon: IconType;
  title: string;
  amount: string;
  sub?: string;
  noRule?: boolean;
};

function Tx({ tone, icon: Icon, title, amount, sub, noRule }: TxProps) {
  return (
    <div className={noRule ? "wp-hero__tx wp-hero__tx--plain" : "wp-hero__tx"}>
      <div className="wp-hero__tx-main">
        <span className={`wp-hero__tx-icon wp-hero__tx-icon--${tone}`}>
          <img src={`${A}/ellipse-${tone}.svg`} width={18.3299} height={18.3299} alt="" />
          <Icon aria-hidden />
        </span>
        <span className="wp-hero__tx-text">
          <span className="wp-hero__tx-title">{title}</span>
          <span className="wp-hero__tx-date">08 Mar 2024</span>
        </span>
      </div>
      <span className={sub ? "wp-hero__tx-text wp-hero__tx-text--end" : "wp-hero__tx-text"}>
        <span className="wp-hero__tx-title">{amount}</span>
        {sub && <span className="wp-hero__tx-date wp-hero__tx-sub">{sub}</span>}
      </span>
    </div>
  );
}

function MenuItem({ icon: Icon, label, active }: { icon: IconType; label: string; active?: boolean }) {
  return (
    <span className={active ? "wp-hero__item wp-hero__item--active" : "wp-hero__item"}>
      <span className="wp-hero__item-icon">
        <Icon aria-hidden />
      </span>
      <span>{label}</span>
    </span>
  );
}

export default function HeroOverview() {
  return (
    <ScaledCanvas
      width={1019}
      height={600}
      label="WeWire dashboard overview screen with balance, chart and currency wallets"
      className="wp-hero"
    >
      <div className="wp-hero__bg">
        <img src={`${A}/bg.jpg`} width={736} height={1308} alt="" />
      </div>

      <div className="wp-hero__frame">
        {/* Sidebar Nav (1001:14928) */}
        <aside className="wp-hero__side">
          <div className="wp-hero__side-top">
            <div className="wp-hero__side-head">
              <div className="wp-hero__logo-row">
                <span className="wp-hero__logo">
                  <img className="wp-hero__logo-mark" src={`${A}/logo-mark.svg`} width={17.6943} height={11.0001} alt="" />
                  <img className="wp-hero__logo-text" src={`${A}/logo-text.svg`} width={41.8721} height={8.41467} alt="" />
                </span>
              </div>
              <div className="wp-hero__side-rule" />
            </div>
            <div className="wp-hero__account">
              <img className="wp-hero__avatar" src={`${A}/avatar.jpg`} width={14.664} height={14.664} alt="" />
              <span className="wp-hero__account-text">
                <span className="wp-hero__account-name">Feather Dev</span>
                <span className="wp-hero__account-bal">GHS 54,346.89</span>
              </span>
              <img src={`${A}/nav-chevron-down.svg`} width={9.16497} height={9.16497} alt="" />
            </div>
            <div className="wp-hero__side-rule" />
            <nav className="wp-hero__menu">
              {NAV.map((item) => (
                <MenuItem key={item.label} {...item} />
              ))}
            </nav>
          </div>
          <div className="wp-hero__side-bottom">
            <div className="wp-hero__promo">
              <span className="wp-hero__promo-icon">
                <LuGift aria-hidden />
              </span>
              <span className="wp-hero__promo-text">
                <span className="wp-hero__promo-title">Claim your points</span>
                <span className="wp-hero__promo-sub">Find it on your rewards</span>
              </span>
            </div>
            <nav className="wp-hero__menu">
              {NAV_FOOT.map((item) => (
                <MenuItem key={item.label} {...item} />
              ))}
            </nav>
          </div>
        </aside>

        {/* Header section (1001:14531) */}
        <div className="wp-hero__main">
          <div className="wp-hero__page-head">
            <div className="wp-hero__title-row">
              <p className="wp-hero__title">Overview</p>
              <div className="wp-hero__actions">
                <span className="wp-hero__btn wp-hero__btn--primary">Deposit</span>
                <span className="wp-hero__btn">Send</span>
                <span className="wp-hero__btn">Convert</span>
              </div>
            </div>
            <img className="wp-hero__hair wp-hero__divider" src={`${A}/divider.svg`} width={538.9} height={0.458249} alt="" />
          </div>

          <div className="wp-hero__body">
            <div className="wp-hero__top">
              {/* Balance + chart card */}
              <div className="wp-hero__card wp-hero__balance">
                <div className="wp-hero__balance-section">
                  <div className="wp-hero__balance-head">
                    <div className="wp-hero__balance-left">
                      <div className="wp-hero__muted-row">
                        <span className="wp-hero__placeholder">Current balance</span>
                        <LuEyeOff className="wp-hero__eye" aria-hidden />
                      </div>
                      <p className="wp-hero__big">
                        $ 534,786<span className="wp-hero__cents">.58</span>
                      </p>
                    </div>
                    <div className="wp-hero__btn-group">
                      <span className="wp-hero__btn-group-item">
                        This week
                        <LuChevronDown aria-hidden />
                      </span>
                    </div>
                  </div>
                  <div className="wp-hero__sub-stats">
                    <span className="wp-hero__sub-stat">
                      <span className="wp-hero__quart">Available</span>
                      <span className="wp-hero__strong">
                        $490,786<span className="wp-hero__cents">.58</span>
                      </span>
                    </span>
                    <span className="wp-hero__dot">.</span>
                    <span className="wp-hero__sub-stat">
                      <span className="wp-hero__quart">Pending</span>
                      <span className="wp-hero__strong">
                        $44,000<span className="wp-hero__cents">.00</span>
                      </span>
                    </span>
                  </div>
                </div>

                <div className="wp-hero__hline">
                  <img className="wp-hero__hair" src={`${A}/line-56.svg`} width={314.358} height={0.458249} alt="" />
                </div>

                <div className="wp-hero__limit">
                  <div className="wp-hero__limit-row">
                    <span className="wp-hero__tertiary">Monthly transaction limit</span>
                    <span className="wp-hero__tertiary">
                      $57,645.98 of <span className="wp-hero__strong">$500,000</span>
                    </span>
                  </div>
                  <div className="wp-hero__limit-bar">
                    <span />
                  </div>
                  <div className="wp-hero__limit-reset">
                    <span className="wp-hero__tertiary">
                      Resets in <span className="wp-hero__strong">22 days</span>
                    </span>
                  </div>
                </div>

                <div className="wp-hero__chart-wrap">
                  <div className="wp-hero__chart">
                    <img className="wp-hero__block" src={`${A}/series-1.svg`} width={314.358} height={110.438} alt="" />
                    <div className="wp-hero__axis">
                      {Y_LINES.map((src, i) => (
                        <img
                          key={i}
                          className="wp-hero__block"
                          src={`${A}/${src}`}
                          width={308.401}
                          height={i === 0 ? 10.0815 : 7.79023}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                  <div className="wp-hero__x-axis">
                    {X_AXIS.map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                  <div className="wp-hero__vline">
                    <img className="wp-hero__hair" src={`${A}/line-32.svg`} width={86.609} height={0.458249} alt="" />
                  </div>
                  <div className="wp-hero__tooltip">
                    <div className="wp-hero__tooltip-badge">
                      <span className="wp-hero__tooltip-strong">Tues 9/30</span>
                      <span className="wp-hero__tooltip-row">
                        <span className="wp-hero__tooltip-label">Balance</span>
                        <span className="wp-hero__tooltip-strong">$3,451.00</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wallets */}
              <div className="wp-hero__wallets">
                <div className="wp-hero__wallets-head">
                  <div className="wp-hero__wallets-title">
                    <span className="wp-hero__h3">Wallets</span>
                    <span className="wp-hero__refresh">
                      <LuRefreshCw aria-hidden />
                      <span>5 mins ago</span>
                    </span>
                  </div>
                  <span className="wp-hero__link">View all</span>
                </div>
                <div className="wp-hero__wallets-body">
                  <div className="wp-hero__wallet-list">
                    {WALLETS.map((w) => (
                      <div key={w.code} className="wp-hero__wallet">
                        <span className="wp-hero__wallet-left">
                          <img src={`${A}/${w.icon}`} width={14.664} height={14.664} alt="" />
                          <span className="wp-hero__wallet-code">{w.code}</span>
                        </span>
                        <span className="wp-hero__wallet-right">
                          <span className="wp-hero__wallet-amount">{w.amount}</span>
                          <span className="wp-hero__wallet-chev">
                            <img src={`${A}/${w.chev}`} width={6.87373} height={2.74949} alt="" />
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="wp-hero__open-wallet">
                    <span className="wp-hero__open-btn">
                      <span>Open wallet</span>
                      <LuPlus aria-hidden />
                    </span>
                    <span className="wp-hero__open-sub">Create multiple currency wallets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="wp-hero__card wp-hero__stats">
              {STATS.map((s, i) => (
                <Fragment key={s.label}>
                  {i > 0 && (
                    <span className="wp-hero__vdiv">
                      <img className="wp-hero__hair" src={`${A}/vector-2.svg`} width={53.6151} height={0.458249} alt="" />
                    </span>
                  )}
                  <div className="wp-hero__stat">
                    <span className="wp-hero__placeholder">{s.label}</span>
                    <span className="wp-hero__stat-value">
                      {s.whole}
                      <span className="wp-hero__cents">.58</span>
                    </span>
                    <span className="wp-hero__stat-period">This week</span>
                  </div>
                </Fragment>
              ))}
            </div>

            {/* Bottom tables */}
            <div className="wp-hero__bottom">
              <div className="wp-hero__table wp-hero__table--invest">
                <div className="wp-hero__invest-inner">
                  <div className="wp-hero__table-head">
                    <span className="wp-hero__h3 wp-hero__h3--semi">Invest</span>
                    <span className="wp-hero__link">View deals</span>
                  </div>
                  <div className="wp-hero__deals">
                    {DEALS.map((d, i) => (
                      <Fragment key={d.icon}>
                        {i > 0 && (
                          <span className="wp-hero__rule">
                            <img className="wp-hero__hair" src={`${A}/vector-8.svg`} width={187.882} height={0.458249} alt="" />
                          </span>
                        )}
                        <div className="wp-hero__deal">
                          <span className="wp-hero__deal-left">
                            <img src={`${A}/${d.icon}`} width={18.3291} height={18.3301} alt="" />
                            <span className="wp-hero__deal-text">
                              <span className="wp-hero__deal-title-row">
                                <span className="wp-hero__deal-title">Accra Solar Note</span>
                                <span className={`wp-hero__badge wp-hero__badge--${d.tone}`}>{d.badge}</span>
                              </span>
                              <span className="wp-hero__deal-meta">{d.meta}</span>
                            </span>
                          </span>
                          <img
                            className="wp-hero__deal-chev"
                            src={`${A}/chevron-down.svg`}
                            width={6.41548}
                            height={6.41548}
                            alt=""
                          />
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="wp-hero__table wp-hero__table--tx">
                <div className="wp-hero__table-head wp-hero__table-head--pad">
                  <span className="wp-hero__h3 wp-hero__h3--semi">Recent transactions</span>
                  <span className="wp-hero__link">View all</span>
                </div>
                <div className="wp-hero__tx-list">
                  <div className="wp-hero__tx-group">
                    <Tx tone="green" icon={LuArrowDownLeft} title="January salary" amount="+ USD 2,000" />
                  </div>
                  <div className="wp-hero__tx-group wp-hero__tx-group--gap">
                    <Tx tone="red" icon={LuArrowUpRight} title="Transfer to Johnny" amount="- GHS 350" />
                    <Tx
                      tone="blue"
                      icon={LuArrowLeftRight}
                      title="Conversion of 870 USD to 9997.86 GHS"
                      amount="+ USD 870.00"
                      sub="- GHS 9997.86"
                      noRule
                    />
                  </div>
                  <div className="wp-hero__tx-group">
                    <Tx tone="green" icon={LuArrowDownLeft} title="January salary" amount="+ USD 2,000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaledCanvas>
  );
}
