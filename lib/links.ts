/**
 * Every outbound link on the site, in one place.
 *
 * How a hover preview picks its picture (see components/PreviewLink.tsx):
 * - `image` set → that image is shown.
 * - no `image` and a real http(s) `href` → a live screenshot of the page (microlink.io).
 * - the picture fails to load, or there's nothing to screenshot → DEFAULT_PREVIEW.
 * Links without a preview (email, footer pills, Featured On cards) just use `href`.
 */
export type LinkSpec = {
  href: string;
  /** Static preview picture, used instead of a live screenshot. */
  image?: string;
};

export const PLACEHOLDER = "#";
export const DEFAULT_PREVIEW = "/assets/shared/avatar.png";

export const LINKS = {
  // Home hero
  wewire: { href: "https://www.wewire.com", image: "/assets/previews/wewire.jpg" },
  mobileApp: { href: "https://www.wewire.com/individual", image: "/assets/previews/mobile-app.jpg" },
  tokenizedTradeFinance: {
    href: "https://blog.wewire.com/product-updates/minting-trust-the-story-behind-wewires-trade-tokenisation-platform/",
    image: "/assets/previews/trade-finance.jpg",
  },

  // Home "What I've been up to" + The Delegated Self page
  dawnExhibition: { href: "https://dawn.ul.ie/ixuxdesign/2026/Ebi-YaaKwaw/", image: "/assets/previews/dawn-exhibition.jpg" },
  delegatedSelf: { href: "/delegated-self", image: "/assets/home/project-delegated-self.jpg" },
  // The Learnings page is switched off for now (app/_learnings); this link is unused until it's back.
  binanceHackPost: { href: "/learnings", image: "/assets/learnings/cover.jpg" },

  // The Delegated Self page
  paymentRequired402: { href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402" },
  // "Watch Estate Mode (Fictional Film)" under the film still.
  estateModeFilm: { href: "https://youtu.be/Md0myz692cA", image: "/assets/delegated-self/film-still.jpg" },

  // Footer (no hover previews)
  email: { href: "mailto:ebiyaakwaw@gmail.com" },
  cv: { href: "https://drive.google.com/file/d/1xIpvbiPBYPilcHjxMcgmkEpFmcbACbQi/view?usp=sharing" },
  linkedin: { href: "https://www.linkedin.com/in/ebi-yaa-kwaw/" },
  twitter: { href: "https://x.com/_ebiyaa" },

  // About → Featured On (no hover previews; the cards are pictures already)
  womenInDesign: { href: "https://youtu.be/yIyGy3mxuMI?si=LTUsjv1o_ZzK9of-&t=324" },
  hackHive: { href: "https://www.instagram.com/reels/DJ_63xQsOuv/" },
  fintechMultipleMarkets: { href: "https://youtu.be/h_w7iLr818U?si=bOsnCpTuUc_o5dR3&t=1258" },
} satisfies Record<string, LinkSpec>;
