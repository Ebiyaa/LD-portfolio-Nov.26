/* eslint-disable @next/next/no-img-element */
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaArrowRightArrowLeft,
  FaBuildingColumns,
  FaCoins,
  FaEuroSign,
  FaRegPaperPlane,
} from "react-icons/fa6";
import ScaledCanvas from "@/components/case-study/ScaledCanvas";
import "./fund-wallet.css";

const A = "/assets/wewire-platform/wallet";

type Badge = "us" | "us-alt" | "eu" | "ghs" | "usdt";

type Option = {
  title: string;
  sub: string;
  Icon: IconType;
  badge: Badge;
  active?: boolean;
};

const OPTIONS: Option[] = [
  { title: "USD (Wire/ACH)", sub: "1 - 3 business days", Icon: FaBuildingColumns, badge: "us" },
  { title: "USD (Swift)", sub: "Same day transfer", Icon: FaArrowRightArrowLeft, badge: "us-alt" },
  { title: "Euro (SEPA)", sub: "1 - 3 business days", Icon: FaEuroSign, badge: "eu" },
  { title: "Euro (FPS)", sub: "Same day transfer", Icon: FaRegPaperPlane, badge: "eu" },
  { title: "GHST (Mobile Money)", sub: "Same day transfer", Icon: FaCoins, badge: "ghs" },
  { title: "GHST (Virtual Account)", sub: "Same day transfer", Icon: FaCoins, badge: "ghs" },
  { title: "GHST (on-chain)", sub: "Instant transfer", Icon: FaCoins, badge: "ghs" },
  { title: "Stablecoin (USDT/USDC)", sub: "Instant transfer", Icon: FaCoins, badge: "usdt", active: true },
];

function RowBadge({ badge }: { badge: Badge }) {
  if (badge === "us" || badge === "us-alt") {
    return (
      <span className={`wp-wallet__badge wp-wallet__badge--${badge}`}>
        <img src={`${A}/us-flag.svg`} width={9.37301} height={9.37301} alt="" />
      </span>
    );
  }
  if (badge === "eu") {
    return (
      <span className="wp-wallet__badge wp-wallet__badge--eu">
        <img src={`${A}/eu-flag.png`} alt="" />
      </span>
    );
  }
  if (badge === "ghs") {
    return (
      <span className="wp-wallet__badge wp-wallet__badge--ghs">
        <img className="wp-wallet__ghs-a" src={`${A}/ghs-logo-a.svg`} width={5.88821} height={5.99873} alt="" />
        <span className="wp-wallet__ghs-b">
          <span className="wp-wallet__ghs-b-inner">
            <img src={`${A}/ghs-logo-b.svg`} width={2.86389} height={3.77637} alt="" />
          </span>
        </span>
      </span>
    );
  }
  return null;
}

/** Mockup card (Figma 1001:16528): "Fund your wallet/account" currency picker, clipped at the bottom. */
export default function FundWallet() {
  return (
    <ScaledCanvas width={501} height={400} label="Fund your wallet or account currency picker" className="wp-wallet">
      <div className="wp-wallet__card">
        <div className="wp-wallet__border" />
        <img className="wp-wallet__bg" src={`${A}/bg.jpg`} alt="" />

        <div className="wp-wallet__frame">
          <div className="wp-wallet__intro">
            <p className="wp-wallet__title">Fund your wallet/account</p>
            <p className="wp-wallet__lead">
              Conversion rates are guaranteed for 24 hours. Newer rates may apply for transfers received this duration.
            </p>
          </div>

          <div className="wp-wallet__field">
            <p className="wp-wallet__label">Which currency would you like to fund?</p>
            <div className="wp-wallet__list">
              {OPTIONS.map(({ title, sub, Icon, badge, active }) => (
                <div key={title} className={active ? "wp-wallet__row wp-wallet__row--active" : "wp-wallet__row"}>
                  <div className="wp-wallet__glyph">
                    <Icon className="wp-wallet__glyph-icon" aria-hidden />
                    {badge === "usdt" && (
                      <span className="wp-wallet__usdt">
                        <img src={`${A}/usdt.svg`} width={9.37301} height={9.37302} alt="" />
                      </span>
                    )}
                  </div>
                  <div className="wp-wallet__text">
                    <p className="wp-wallet__row-title">{title}</p>
                    <p className="wp-wallet__row-sub">{sub}</p>
                  </div>
                  <FaArrowRight className="wp-wallet__arrow" aria-hidden />
                  <RowBadge badge={badge} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledCanvas>
  );
}
