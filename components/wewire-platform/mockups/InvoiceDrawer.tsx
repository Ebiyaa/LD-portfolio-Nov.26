/* eslint-disable @next/next/no-img-element */
import ScaledCanvas from "@/components/case-study/ScaledCanvas";
import "./invoice-drawer.css";

const A = "/assets/wewire-platform/invoice";

const LINES = [
  { label: "Principal", note: "1/3 of 60,000.00", amount: "20,000.00" },
  { label: "Interest", note: "18% p.a. on 40,000.00 for 30 days", amount: "591.78" },
  { label: "Late fees", note: "0.05% a day after the due date", amount: "0.00" },
];

/** Mockup card (Figma 1001:16197): repayment invoice drawer on a photo background. */
export default function InvoiceDrawer() {
  return (
    <ScaledCanvas
      width={501}
      height={400}
      label="Repayment invoice drawer for invoice INV-2026-0142"
      className="wp-invoice"
    >
      <div className="wp-invoice__card">
        <div className="wp-invoice__border" />
        <img className="wp-invoice__bg" src={`${A}/bg.jpg`} alt="" />

        <div className="wp-invoice__drawer">
          <div className="wp-invoice__header">
            <div className="wp-invoice__title">
              <p className="wp-invoice__title-text">Invoice INV-2026-0142</p>
              <span className="wp-invoice__badge">
                <span className="wp-invoice__badge-dot" />
                <span className="wp-invoice__badge-text">Unpaid</span>
              </span>
            </div>
            <p className="wp-invoice__close">✕</p>
          </div>

          <div className="wp-invoice__body">
            <div className="wp-invoice__doc">
              <div className="wp-invoice__top">
                <div className="wp-invoice__logo">
                  <img
                    className="wp-invoice__logo-mark"
                    src={`${A}/logo-mark.svg`}
                    width={23.1134}
                    height={14.369}
                    alt=""
                  />
                  <img
                    className="wp-invoice__logo-text"
                    src={`${A}/logo-text.svg`}
                    width={54.696}
                    height={10.9918}
                    alt=""
                  />
                </div>
                <div className="wp-invoice__meta">
                  <p className="wp-invoice__meta-title">Repayment invoice</p>
                  <p className="wp-invoice__small wp-invoice__small--medium">INV-2026-0142</p>
                </div>
              </div>

              <div className="wp-invoice__parties">
                <div className="wp-invoice__stack">
                  <p className="wp-invoice__small wp-invoice__small--medium">Billed to</p>
                  <p className="wp-invoice__text wp-invoice__text--medium">
                    Atlas Logistics Solutions (West Africa Cocoa Export...)
                  </p>
                  <p className="wp-invoice__small wp-invoice__small--secondary">Issuer token · ATLEP0042</p>
                </div>
                <div className="wp-invoice__stack">
                  <p className="wp-invoice__text wp-invoice__text--medium">Due 9 Dec 2026</p>
                  <div className="wp-invoice__dates">
                    <p>Issued 18 Nov 2026</p>
                    <p>Period 9 Nov – 9 Dec 2026</p>
                  </div>
                </div>
              </div>

              <div className="wp-invoice__divider" />

              <div className="wp-invoice__deal">
                <p className="wp-invoice__text wp-invoice__text--medium">Cashew Working Capital</p>
                <p className="wp-invoice__deal-step">Instalment 2 of 3</p>
              </div>

              <div className="wp-invoice__lines">
                <div className="wp-invoice__line wp-invoice__line--head">
                  <div className="wp-invoice__desc">
                    <p className="wp-invoice__small wp-invoice__small--medium">Description</p>
                  </div>
                  <p className="wp-invoice__small wp-invoice__small--medium">Amount (USDC)</p>
                </div>
                {LINES.map((line) => (
                  <div className="wp-invoice__line" key={line.label}>
                    <div className="wp-invoice__desc">
                      <p className="wp-invoice__text">{line.label}</p>
                      <p className="wp-invoice__small">{line.note}</p>
                    </div>
                    <p className="wp-invoice__text wp-invoice__text--medium">{line.amount}</p>
                  </div>
                ))}
                <div className="wp-invoice__line wp-invoice__line--total">
                  <div className="wp-invoice__desc">
                    <p className="wp-invoice__text wp-invoice__text--semibold">Total due</p>
                  </div>
                  <p className="wp-invoice__total">20,591.78 USDC</p>
                </div>
              </div>

              <div className="wp-invoice__pay">
                <p className="wp-invoice__text wp-invoice__text--medium">How to pay</p>
                <p className="wp-invoice__small wp-invoice__pay-copy">
                  Pay in WeWire from your USDC wallet, or send USDC to your WeWire virtual account using the
                  reference INV-2026-0142. We match the payment to this invoice and pay token holders the same day.
                </p>
              </div>
            </div>
          </div>

          <div className="wp-invoice__footer">
            <span className="wp-invoice__btn wp-invoice__btn--secondary">Download PDF</span>
            <span className="wp-invoice__btn wp-invoice__btn--primary">Pay 20,591.78 USDC</span>
          </div>
        </div>
      </div>
    </ScaledCanvas>
  );
}
