import { LINKS } from "@/lib/links";
import "./hero-actions.css";

/** "Download my CV" + "Connect" buttons and the "4+ years in UX design" badge (Home and About heroes). */
export default function HeroActions() {
  return (
    <div className="hero-actions">
      <div className="hero-actions__buttons">
        <a className="btn btn--primary" href={LINKS.cv.href} target="_blank" rel="noopener noreferrer">
          Download my CV
        </a>
        <a className="btn btn--outline" href="#connect">
          Connect
        </a>
      </div>
      <div className="hero-actions__rating">
        <div className="hero-actions__photos" aria-hidden="true">
          <span className="hero-actions__photo hero-actions__photo--1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/home/rating-1.png" alt="" />
          </span>
          <span className="hero-actions__photo hero-actions__photo--2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/home/rating-2.svg" alt="" />
          </span>
          <span className="hero-actions__photo hero-actions__photo--3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/home/rating-3.png" alt="" width={25} height={25} />
          </span>
        </div>
        <div className="hero-actions__rating-text">
          <p className="hero-actions__rating-title">4+ years in UX design</p>
          <p className="hero-actions__rating-sub">3 businesses worked with</p>
        </div>
      </div>
    </div>
  );
}
