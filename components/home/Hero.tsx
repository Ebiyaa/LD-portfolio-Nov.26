// import Link from "next/link"; // used by the hidden "Read my story" tag below
import PreviewLink from "@/components/PreviewLink";
import HeroActions from "@/components/site/HeroActions";
import { LINKS } from "@/lib/links";
import "./hero.css";

/** Home hero (Figma 1:12745). */
export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero__inner">
        <h1 className="home-hero__heading">
          <span className="home-hero__line">
            <span className="home-hero__big">
              Hi <span className="home-hero__wave">👋🏽</span>, I&apos;m
            </span>
            <span className="home-hero__name">
              <span className="home-hero__avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/shared/avatar.png" alt="" width={62} height={62} />
              </span>
              <span className="home-hero__pill">Ebi-Yaa Kwaw</span>
              {/* "Read my story" tag, hidden for now; uncomment to bring it back.
              <Link href="/about" className="home-hero__annotation">
                <img src="/assets/home/annotation-pointer.svg" alt="" width={13} height={13} className="home-hero__annotation-pointer" />
                <span className="home-hero__annotation-label">Read my story</span>
              </Link>
              */}
            </span>
          </span>
          <span className="home-hero__line">
            <span className="home-hero__big">a</span>
            <span className="home-hero__pill">UX &amp; Interaction Designer</span>
          </span>
        </h1>
        <p className="home-hero__intro">
          I work as a Senior UX Designer at <PreviewLink {...LINKS.wewire}>WeWire</PreviewLink> , owning B2B platforms
          and internal trade desk tools that power <strong>$3bn+ transactions</strong> in cross-border payments across
          100+ countries. I’m currently working on WeWire’s <PreviewLink {...LINKS.mobileApp}>Mobile App</PreviewLink>,
          that features its recent <PreviewLink {...LINKS.tokenizedTradeFinance}>Tokenized Trade Finance</PreviewLink>{" "}
          project, bringing trade finance on-chain so businesses can access faster, more transparent funding.
        </p>
      </div>
      <HeroActions />
    </section>
  );
}
