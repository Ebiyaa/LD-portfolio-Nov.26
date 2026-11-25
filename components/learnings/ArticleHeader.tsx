import ShareButton from "./ShareButton";
import "./learnings.css";

const TAGS = ["Permission", "Trust", "DeFi", "Automation"];

/** Title, intro, tags, byline and cover (Figma 1001:17093 – 1001:17117). */
export default function ArticleHeader() {
  return (
    <header className="ln-header">
      <div className="ln-intro">
        <h1 className="ln-title">What the $6.3 billion Binance hack says about letting software act for you</h1>
        <p className="ln-lede">
          On 29 October 2026, about <strong>$6.3 billion</strong> was taken from Binance in roughly twenty minutes
          across eleven different networks. It is the biggest crypto theft that has ever happened. The interesting part
          of this story isn&apos;t how much money was taken but how it was taken. I spent this year building an
          installation about what happens when you let software act for you and then need it to stop. I thought it
          would stay hypothetical for a few more years until the largest crypto heist in history happened. In this
          read, I detail how my research on <strong className="ln-semibold">The Delegated Self</strong> extends into
          this incident.
        </p>
      </div>

      <ul className="ln-tags" aria-label="Topics">
        {TAGS.map((tag) => (
          <li key={tag} className="ln-tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="ln-byline">
        <div className="ln-byline__author">
          <span className="ln-byline__avatar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/shared/avatar.png" alt="" width={32} height={32} />
          </span>
          <span className="ln-byline__name">Ebi-Yaa Kwaw</span>
        </div>
        <p className="ln-byline__meta">
          <span>
            Updated: <time dateTime="2026-11-24">Nov 24, 2026</time>
          </span>
          <span aria-hidden="true">.</span>
          <span>5 min read</span>
        </p>
        <ShareButton />
      </div>

      <figure className="ln-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/learnings/cover.jpg"
          alt="Gold Bitcoin and other cryptocurrency coins"
          width={1880}
          height={1254}
          fetchPriority="high"
        />
      </figure>
    </header>
  );
}
