import "./fund-account.css";
/* eslint-disable @next/next/no-img-element */
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import { PiBankLight, PiCloudArrowUpLight, PiPaperPlaneTiltLight } from "react-icons/pi";
import ScaledCanvas from "@/components/case-study/ScaledCanvas";

const A = "/assets/wewire-platform/fund-account";

/** Mockup card (Figma 1001:16275): "Fund USD account" modal over a gradient photo. */
export default function FundAccount() {
  return (
    <ScaledCanvas
      width={1019}
      height={400}
      label="Fund USD account flow with account selection and proof upload"
      className="wp-fund"
    >
      <div className="wp-fund__border" />
      <img className="wp-fund__bg" src={`${A}/bg.jpg`} alt="" />

      <div className="wp-fund__modal">
        <div className="wp-fund__nav">
          <img src={`${A}/logo-mark.svg`} alt="" width={25.586} height={15.902} />
          <div className="wp-fund__steps">
            <div className="wp-fund__step">
              <img src={`${A}/check-icon.svg`} alt="" width={7.951} height={7.951} />
              <span>Choose currency</span>
            </div>
            <span className="wp-fund__chevron">
              <FaChevronRight />
            </span>
            <div className="wp-fund__step">
              <span className="wp-fund__badge">2</span>
              <span>Account details</span>
            </div>
          </div>
          <div className="wp-fund__close">
            <img src={`${A}/x-close.svg`} alt="" width={9.939} height={9.939} />
          </div>
        </div>

        <div className="wp-fund__content">
          <div className="wp-fund__col">
            <div className="wp-fund__head">
              <img src={`${A}/flag-us.svg`} alt="" width={19.878} height={19.878} />
              <div className="wp-fund__head-text">
                <p className="wp-fund__title">Fund USD account</p>
                <p className="wp-fund__sub">
                  Conversion rates are guaranteed for 24 hours. Newer rates may apply for transfers received this
                  duration.
                </p>
              </div>
            </div>

            <div className="wp-fund__row">
              <div className="wp-fund__left">
                <div className="wp-fund__field">
                  <p className="wp-fund__label">Account to fund</p>
                  <div className="wp-fund__cards">
                    <div className="wp-fund__card wp-fund__card--active">
                      <span className="wp-fund__card-icon">
                        <PiBankLight />
                      </span>
                      <div className="wp-fund__card-text">
                        <p className="wp-fund__card-title">USD (FedWire)</p>
                        <p className="wp-fund__card-sub">1 - 3 business days</p>
                      </div>
                      <span className="wp-fund__radio wp-fund__radio--on" />
                    </div>
                    <div className="wp-fund__card">
                      <span className="wp-fund__card-icon">
                        <PiPaperPlaneTiltLight />
                      </span>
                      <div className="wp-fund__card-text">
                        <p className="wp-fund__card-title">USD (ACH)</p>
                        <p className="wp-fund__card-sub">Same day transfer</p>
                      </div>
                      <span className="wp-fund__radio" />
                    </div>
                  </div>
                </div>

                <div className="wp-fund__banner">
                  <img
                    className="wp-fund__bank"
                    src={`${A}/bank-illustration.svg`}
                    alt=""
                    width={96.904}
                    height={93.045}
                  />
                  <div className="wp-fund__banner-text">
                    <p className="wp-fund__banner-title">Get a Virtual USD account</p>
                    <p className="wp-fund__banner-sub">Regulated by our banking partner for your business</p>
                    <p className="wp-fund__banner-link">
                      Request virtual account <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>

              <div className="wp-fund__right">
                <div className="wp-fund__upload-field">
                  <p className="wp-fund__label">Upload proof of transaction</p>
                  <div className="wp-fund__upload">
                    <PiCloudArrowUpLight className="wp-fund__cloud" />
                    <div className="wp-fund__upload-text">
                      <p className="wp-fund__upload-title">Upload transfer receipt/advise for this transaction</p>
                      <p className="wp-fund__upload-hint">JPEG, PNG and PDF formats up to 10 MB</p>
                    </div>
                    <span className="wp-fund__browse">Browse file</span>
                  </div>
                </div>
                <div className="wp-fund__actions">
                  <span className="wp-fund__btn wp-fund__btn--primary">I have made the deposit</span>
                  <span className="wp-fund__btn wp-fund__btn--secondary">I’ll Transfer Later</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wp-fund__shade" />
    </ScaledCanvas>
  );
}
