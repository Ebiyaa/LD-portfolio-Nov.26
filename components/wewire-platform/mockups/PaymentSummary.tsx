/* eslint-disable @next/next/no-img-element */
import { FaChevronRight, FaCircleCheck, FaRegCopy } from "react-icons/fa6";
import ScaledCanvas from "@/components/case-study/ScaledCanvas";
import "./payment-summary.css";

const A = "/assets/wewire-platform/payment";

/** Mockup card (Figma 1001:16461): stablecoin payment summary, top cut off by the card. */
export default function PaymentSummary() {
  return (
    <ScaledCanvas width={501} height={400} label="Stablecoin payment summary with fees and completion state" className="wp-pay">
      <div className="wp-pay__card">
        <img className="wp-pay__bg" src={`${A}/bg.jpg`} alt="" />
        <div className="wp-pay__border" />

        <div className="wp-pay__frame">
          <div className="wp-pay__head">
            <img className="wp-pay__coin" src={`${A}/usdt-coin.jpg`} alt="" />
            <p className="wp-pay__title">
              <span className="wp-pay__title-strong">Pay 990.00 </span>
              <span className="wp-pay__title-unit">USDT</span>
            </p>
            <p className="wp-pay__to">
              to <span className="wp-pay__to-name">Acme Merchants</span>
            </p>
          </div>

          <div className="wp-pay__rule" />

          <div className="wp-pay__body">
            <div className="wp-pay__summary">
              <div className="wp-pay__top">
                <div className="wp-pay__top-main">
                  <div className="wp-pay__pay">
                    <p className="wp-pay__muted">You pay</p>
                    <div className="wp-pay__amount-row">
                      <div className="wp-pay__amount">
                        <img src={`${A}/usdt.svg`} width={17.457} height={17.457} alt="" />
                        <p className="wp-pay__amount-text">990.00 USDT</p>
                      </div>
                      <p className="wp-pay__muted wp-pay__muted--normal">1 USDT = $1.00</p>
                    </div>
                  </div>
                  <div className="wp-pay__address">
                    <p>SOL1234.........5678</p>
                    <FaRegCopy className="wp-pay__icon" aria-hidden />
                  </div>
                  <div className="wp-pay__change-row">
                    <p className="wp-pay__change">
                      <span>Change asset</span>
                      <FaChevronRight className="wp-pay__icon" aria-hidden />
                    </p>
                  </div>
                </div>

                <div className="wp-pay__progress">
                  <p className="wp-pay__progress-label">1000 / 1000 USDT</p>
                  <div className="wp-pay__bar">
                    <div className="wp-pay__bar-track" />
                    <div className="wp-pay__bar-fill" />
                  </div>
                </div>
              </div>

              <div className="wp-pay__divider">
                <img src={`${A}/divider.svg`} width={311.316} height={0.727373} alt="" />
              </div>

              <div className="wp-pay__fees">
                <div className="wp-pay__fee">
                  <p>Network fee</p>
                  <p className="wp-pay__fee-value">5.00 USDT</p>
                </div>
                <div className="wp-pay__fee">
                  <p>Processing fee</p>
                  <p className="wp-pay__fee-value">5.00 USDT</p>
                </div>
                <div className="wp-pay__fee wp-pay__fee--total">
                  <p>Total</p>
                  <p>1000.00 USDT</p>
                </div>
              </div>
            </div>

            <div className="wp-pay__status">
              <div className="wp-pay__status-row">
                <FaCircleCheck className="wp-pay__check" aria-hidden />
                <p>Payment complete. You will be redirected shortly.</p>
              </div>
            </div>

            <p className="wp-pay__expire">
              Payment link will expire in <strong>7:42 mins</strong>
            </p>
          </div>
        </div>

        <div className="wp-pay__fade" />
      </div>
    </ScaledCanvas>
  );
}
