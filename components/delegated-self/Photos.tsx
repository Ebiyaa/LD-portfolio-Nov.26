/* eslint-disable @next/next/no-img-element */
import InfiniteSlider from "@/components/motion/InfiniteSlider";

const A = "/assets/delegated-self";

/**
 * Photo crops copied from Figma. `fit` places the image box inside the tile in % of the tile
 * (left / top / width / height), for photos Figma positions outside the default cover crop.
 */
type Fit = { left: number; top: number; width: number; height: number };
type Photo = { src: string; alt: string; fit?: Fit };

const P = {
  breadboard: { src: `${A}/img-6367.jpg`, alt: "Arduino breadboard with jumper wires lit by a blue LED strip" },
  nfc: { src: `${A}/img-6435.jpg`, alt: "NFC tags laid out on a cutting mat next to the pinball button" },
  sensor: { src: `${A}/img-0493.jpg`, alt: "Assembling the orange 3D-printed sensor housing at the workbench" },
  hands: { src: `${A}/img-0496.jpg`, alt: "A visitor resting their hands on the glowing hand-scan pad" },
  booth: { src: `${A}/img-7362.jpg`, alt: "The intervention button and the projected hand-scan prompt in the booth" },
  poster: { src: `${A}/poster.jpg`, alt: "Exhibition poster: The Delegated Self, speculating on AI agents, digital identity and DeFi futures" },
  studio: { src: `${A}/img-0490.jpg`, alt: "Filming the fictional film in a green-screen studio" },
  printing: { src: `${A}/img-5927.jpg`, alt: "An orange part being 3D printed on a Prusa printer" },
  rings: { src: `${A}/img-6325.jpg`, alt: "Three green 3D-printed rings on the printer bed" },
  finished: { src: `${A}/booth.jpg`, alt: "The finished booth in the exhibition space" },
  visitors: { src: `${A}/img-551f.jpg`, alt: "Visitors watching the projection inside the booth at the exhibition" },
  posterSelfie: { src: `${A}/img-7108.jpg`, alt: "Holding up the exhibition poster for The Delegated Self" },
} satisfies Record<string, Photo>;

function Tile({ photo, className }: { photo: Photo; className: string }) {
  const style = photo.fit
    ? { left: `${photo.fit.left}%`, top: `${photo.fit.top}%`, width: `${photo.fit.width}%`, height: `${photo.fit.height}%` }
    : undefined;
  return (
    <figure className={`ds-tile ${className}`}>
      <img src={photo.src} alt={photo.alt} loading="lazy" style={style} />
    </figure>
  );
}

/* Crops from Figma (tile sizes in design px → percentages). */
const SENSOR_328: Fit = { left: -0.03, top: -63.7, width: 105.18, height: 180.67 }; // 345×542 at (-0.11, -191.09) in 328×300
const SENSOR_300: Fit = { left: -0.04, top: -63.7, width: 105.67, height: 180.67 }; // 317×542 at (-0.11, -191.09) in 300×300
const HANDS: Fit = { left: 0, top: -144.67, width: 100, height: 389.33 }; // 1168 tall, centred in 300
const BOOTH: Fit = { left: 0, top: 0, width: 100, height: 110 }; // 330 tall from the top in 300
const STUDIO: Fit = { left: 0, top: -41.33, width: 100, height: 182.67 }; // 548 tall, centred in 300

/** Process photos below "Exploring the convergence…" (Figma 1001:16948): 3 tiles, then 2. */
export function ProcessPhotos() {
  return (
    <div className="ds-photos">
      <Tile photo={P.breadboard} className="ds-photos__third" />
      <Tile photo={P.nfc} className="ds-photos__third" />
      <Tile photo={{ ...P.sensor, fit: SENSOR_328 }} className="ds-photos__third" />
      <Tile photo={{ ...P.hands, fit: HANDS }} className="ds-photos__half" />
      <Tile photo={{ ...P.booth, fit: BOOTH }} className="ds-photos__half" />
    </div>
  );
}

const STRIP: Photo[] = [
  P.poster,
  P.breadboard,
  { ...P.studio, fit: STUDIO },
  P.nfc,
  P.printing,
  P.rings,
  { ...P.sensor, fit: SENSOR_300 },
  { ...P.booth, fit: BOOTH },
  { ...P.hands, fit: HANDS },
  P.finished,
  P.visitors,
  P.posterSelfie,
];

/** Square project photos (Figma 1001:16991) in a slow endless carousel across the full window. */
export function PhotoStrip() {
  return (
    <div className="ds-strip">
      <InfiniteSlider className="ds-strip__slider" aria-label="Project photos" speed={30} speedOnHover={10}>
        {STRIP.map((photo) => (
          <Tile key={photo.src} photo={photo} className="ds-strip__tile" />
        ))}
      </InfiniteSlider>
    </div>
  );
}
