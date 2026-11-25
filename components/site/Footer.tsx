import { FaFile, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LINKS } from "@/lib/links";
import "./footer.css";

const SOCIAL = [
  { label: "CV", Icon: FaFile, link: LINKS.cv },
  { label: "LinkedIn", Icon: FaLinkedin, link: LINKS.linkedin },
  { label: "Twitter", Icon: FaTwitter, link: LINKS.twitter },
];

/** "Connect" block at the bottom of every page. */
export default function Footer() {
  return (
    <footer className="footer container" id="connect">
      <hr className="footer__rule" />
      <div className="footer__body">
        <h2 className="footer__title">Connect</h2>
        <p className="footer__contact">
          Contact me at{" "}
          <a className="text-link" href={LINKS.email.href}>
            ebiyaakwaw@gmail.com
          </a>
        </p>
        <div className="footer__row">
          <ul className="footer__social">
            {SOCIAL.map(({ label, Icon, link }) => (
              <li key={label}>
                <a className="chip" href={link.href} target="_blank" rel="noopener noreferrer">
                  <Icon aria-hidden="true" className="footer__icon" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer__copy">© 2026 Ebi-Yaa Kwaw</p>
        </div>
      </div>
    </footer>
  );
}
