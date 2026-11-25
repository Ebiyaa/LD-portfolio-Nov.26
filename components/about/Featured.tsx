import { LINKS } from "@/lib/links";
import "./about-section.css";
import "./featured.css";

/* Each image keeps its Figma crop inside the 426.67×350 frame (see featured.css). */
const FEATURES = [
  {
    title: "Women in Design - Building Bytes Podcast",
    href: LINKS.womenInDesign.href,
    image: "/assets/about/featured-building-bytes.jpg",
    crop: "about-featured__img--fill",
  },
  {
    title: "HackHive 1.0 by WeWire",
    href: LINKS.hackHive.href,
    image: "/assets/about/featured-hackhive.jpg",
    crop: "about-featured__img--hackhive",
  },
  {
    title: "Building a Fintech in Multiple Markets",
    href: LINKS.fintechMultipleMarkets.href,
    image: "/assets/about/featured-fintech-markets.jpg",
    crop: "about-featured__img--fintech",
  },
];

/** "Featured On" (Figma 1:14351). */
export default function Featured() {
  return (
    <section className="about-section about-featured">
      <div className="about-section__intro">
        <h2 className="about-section__heading">Featured On</h2>
      </div>
      <ul className="about-featured__list">
        {FEATURES.map((f) => (
          <li key={f.title} className="about-featured__item">
            <a className="about-featured__card" href={f.href} target="_blank" rel="noopener noreferrer">
              <span className="about-featured__frame">
                <span className="about-featured__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className={`about-featured__img ${f.crop}`} src={f.image} alt="" loading="lazy" />
                </span>
              </span>
              <span className="about-featured__title">{f.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
