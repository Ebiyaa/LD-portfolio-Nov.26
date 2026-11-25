import PreviewLink from "@/components/PreviewLink";
import InfiniteSlider from "@/components/motion/InfiniteSlider";
import { LINKS } from "@/lib/links";
import "./up-to.css";

/* Figma 1001:14063, left to right. `crop` keeps the image box Figma uses inside each 300 × 300 card. */
const PHOTOS = [
  { src: "/assets/home/learning-1.jpg", alt: "The Delegated Self poster: speculating AI agents, digital identity and DeFi futures" },
  { src: "/assets/home/learning-2.jpg", alt: "Arduino board wired to an orange 3D-printed part on a breadboard" },
  { src: "/assets/home/learning-3.jpg", alt: "NFC tags and printed rings on a cutting mat" },
  { src: "/assets/home/learning-4.jpg", alt: "3D printer printing an orange ring" },
  { src: "/assets/home/learning-5.jpg", alt: "Making the installation" },
  { src: "/assets/home/learning-6.jpg", alt: "Making the installation", crop: "home-up-to__img--tall" },
  { src: "/assets/home/learning-7.jpg", alt: "Making the installation", crop: "home-up-to__img--top" },
  { src: "/assets/home/learning-8.jpg", alt: "Making the installation", crop: "home-up-to__img--long" },
  { src: "/assets/home/learning-9.jpg", alt: "The installation set up at the Dawn Exhibition" },
  { src: "/assets/home/learning-10.jpg", alt: "Visitors inside the exhibition room" },
  { src: "/assets/home/learning-11.jpg", alt: "Holding The Delegated Self poster" },
];

/** "What I've Been Up To" (Figma 1001:14059). */
export default function UpTo() {
  return (
    <section id="up-to" className="home-up-to container" aria-labelledby="home-up-to-heading">
      <div className="home-up-to__intro">
        <h2 id="home-up-to-heading" className="home-up-to__heading">
          What I’ve Been Up To
        </h2>
        <div className="home-up-to__text">
          <p>
            I spent this year building an installation and curating a fictional film towards the{" "}
            <PreviewLink {...LINKS.dawnExhibition}>Dawn Exhibition</PreviewLink> for my Masters research,{" "}
            <PreviewLink {...LINKS.delegatedSelf}>The Delegated Self.</PreviewLink> It uses speculative design
            artifacts to give users a tangible experience into DeFi futures depicting what happens when you let agent
            software, enabled by digital identity act for you.
          </p>
          {/* Hidden while the Learnings page is switched off (app/_learnings). To bring it back,
              rename app/_learnings to app/learnings, restore the nav item, and uncomment this.
          <p>
            I thought it would stay hypothetical for a few more years until the October 2026 $6bn Binance hack
            happened. I write all about how the study extends into this incident in this post{" "}
            <PreviewLink {...LINKS.binanceHackPost}>
              What the $6.3 billion Binance hack says about letting software act for you
            </PreviewLink>
            .
          </p>
          */}
        </div>
      </div>
      <InfiniteSlider className="home-up-to__slider" aria-label="Photos from the project" speed={30} speedOnHover={10}>
        {PHOTOS.map((photo) => (
          <figure key={photo.src} className="home-up-to__card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={`home-up-to__img ${photo.crop ?? ""}`}
              src={photo.src}
              alt={photo.alt}
              width={300}
              height={300}
            />
          </figure>
        ))}
      </InfiniteSlider>
    </section>
  );
}
