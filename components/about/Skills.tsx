import { Funnel_Sans } from "next/font/google";
import "./about-section.css";
import "./skills.css";

const funnelSans = Funnel_Sans({ subsets: ["latin"], weight: "500", variable: "--font-funnel-sans" });

/** `icon` omitted where the design card has no icon (TouchDesigner, Slack). */
const SKILLS: { name: string; icon?: string }[] = [
  { name: "Figma", icon: "/assets/about/icon-figma.svg" },
  { name: "React js", icon: "/assets/about/icon-react.svg" },
  { name: "Unity", icon: "/assets/about/icon-unity.svg" },
  { name: "Framer", icon: "/assets/about/icon-framer.svg" },
  { name: "HTML & CSS", icon: "/assets/about/icon-html-css.svg" },
  { name: "Arduino IDE", icon: "/assets/about/icon-arduino.svg" },
  { name: "Javascript", icon: "/assets/about/icon-javascript.svg" },
  { name: "TouchDesigner" },
  { name: "Github", icon: "/assets/about/icon-github.svg" },
  { name: "Clickup", icon: "/assets/about/icon-clickup.svg" },
  { name: "Slack" },
  { name: "Vercel", icon: "/assets/about/icon-vercel.svg" },
];

/** "Skilled in" (Figma 1:14291). */
export default function Skills() {
  return (
    <section className={`about-section about-skills ${funnelSans.variable}`}>
      <div className="about-section__intro">
        <h2 className="about-section__heading">Skilled in</h2>
      </div>
      <ul className="about-skills__grid">
        {SKILLS.map((s) => (
          <li key={s.name} className="about-skills__card">
            {s.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="about-skills__icon" src={s.icon} alt="" width={28} height={28} />
            )}
            <span className="about-skills__name">{s.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
