/* eslint-disable @next/next/no-img-element */
import ScaledCanvas from "@/components/case-study/ScaledCanvas";
import "./deal-card.css";

const A = "/assets/wewire-platform/deal";

/** Mockup card (Figma 1001:15957): deal card + repayment summary on a photo background. */
export default function DealCard() {
  return (
    <ScaledCanvas
      width={501}
      height={400}
      label="Deal card for the Accra Solar Note with target raise and repayment progress"
      className="wp-deal"
    >
      <div className="wp-deal__card">
        <div className="wp-deal__border" />
        <img className="wp-deal__bg" src={`${A}/bg.jpg`} alt="" />

        <div className="wp-deal__frame">
          {/* Deal card */}
          <div className="wp-deal__deal">
            <div className="wp-deal__deal-top">
              <div className="wp-deal__deal-id">
                <img className="wp-deal__logo" src={`${A}/logo.png`} width={29.449} height={29.45} alt="" />
                <div className="wp-deal__deal-names">
                  <p className="wp-deal__deal-name">Accra Solar Note</p>
                  <p className="wp-deal__muted">Import facility</p>
                </div>
              </div>
              <span className="wp-deal__badge">Fully funded</span>
            </div>

            <div className="wp-deal__deal-bottom">
              <div className="wp-deal__target">
                <p className="wp-deal__muted">Target raise</p>
                <p className="wp-deal__target-value">$1,890,000</p>
              </div>
              <div className="wp-deal__progress">
                <div className="wp-deal__ring">
                  <img
                    className="wp-deal__ring-img"
                    src={`${A}/ring-bg.svg`}
                    width={29.4506}
                    height={29.4506}
                    alt=""
                  />
                  <p className="wp-deal__ring-label">100%</p>
                </div>
                <div className="wp-deal__raised">
                  <p className="wp-deal__raised-value">$1,890,000</p>
                  <p className="wp-deal__muted">raised</p>
                </div>
              </div>
            </div>
          </div>

          {/* Repayment summary */}
          <div className="wp-deal__summary">
            <div className="wp-deal__summary-content">
              <div className="wp-deal__total">
                <p className="wp-deal__total-label">Total raised</p>
                <p className="wp-deal__total-value">
                  $ 1,890,000<span className="wp-deal__total-cents">.00</span>
                </p>
              </div>
              <div className="wp-deal__repaid">
                <div className="wp-deal__repaid-row">
                  <p>Repaid so far</p>
                  <p>
                    $57,645.98 of <strong>$1,890,000</strong>
                  </p>
                </div>
                <div className="wp-deal__bar">
                  <div className="wp-deal__bar-fill" />
                </div>
              </div>
            </div>

            <div className="wp-deal__next">
              <div className="wp-deal__next-row">
                <div className="wp-deal__next-info">
                  <p className="wp-deal__next-label">Next instalment . Due 30 Jan</p>
                  <p className="wp-deal__next-amount">20,591.78 USDC</p>
                </div>
                <div className="wp-deal__next-link">
                  <span className="wp-deal__next-link-text">View invoice</span>
                  {/* Font Awesome "arrow-up-right-from-square" glyph (a font in Figma), drawn as a stroke icon. */}
                  <svg
                    className="wp-deal__next-link-icon"
                    width="7"
                    height="7"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9.5 1.5h5v5M14.5 1.5 7.5 8.5M12.5 9.5v3.5a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 3 3.5h3.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaledCanvas>
  );
}
