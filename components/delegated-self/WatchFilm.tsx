import { FaYoutube } from "react-icons/fa6";
import PreviewLink from "@/components/PreviewLink";
import { LINKS } from "@/lib/links";

/**
 * "Watch Estate Mode (Fictional Film)" with the YouTube mark. Hovering shows the film still,
 * like the site's other link previews. `placement` sets the 16px gap to the image it sits beside.
 */
export default function WatchFilm({ placement }: { placement: "above" | "below" }) {
  return (
    <PreviewLink {...LINKS.estateModeFilm} className={`ds-watch ds-watch--${placement}`}>
      <FaYoutube className="ds-watch__icon" aria-hidden="true" />
      <span className="ds-watch__label">Watch Estate Mode (Fictional Film)</span>
    </PreviewLink>
  );
}
