import Link from "next/link";
import MarketplaceMockup from "./MarketplaceMockup";
import OverviewMockup from "./OverviewMockup";
import "./projects.css";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  label: string;
  visual: React.ReactNode;
};

const OTC_COPY =
  "Turning an OTC trading desk into a digital payments platform that hit $3 billion in transaction volumes, trading across 80+ countries, by making FX and stablecoins feel familiar.";

/* Each visual is laid out on the Figma 856 × 694.34 stage and scaled to the column width (projects.css). */
const PROJECTS: Project[] = [
  {
    title: "WeWire Customer Platform",
    description: OTC_COPY,
    tags: ["Fintech", "B2B Web Paltform", "Stablecoin", "Cross-border Payments"],
    href: "/wewire-platform",
    label: "WeWire customer platform overview dashboard",
    visual: (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="home-projects__bg home-projects__bg--wewire" src="/assets/home/project-wewire-bg.jpg" alt="" />
        <OverviewMockup />
      </>
    ),
  },
  {
    title: "The Delegated Self",
    description: OTC_COPY,
    tags: [
      "Design Research",
      "Interaction Design",
      "Physical Computing",
      "Systems Design",
      "AI & Automation",
      "Speculation Design",
    ],
    href: "/delegated-self",
    label: "Film still: a data centre corridor captioned Decentralized Compliance Registry Protocol Data Center",
    visual: (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="home-projects__bg" src="/assets/home/project-delegated-bg.jpg" alt="" />
        <span className="home-projects__photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/home/project-delegated-self.jpg" alt="" loading="lazy" />
        </span>
      </>
    ),
  },
  // Hidden for now; uncomment to show the Orange Design System row again.
  // {
  //   title: "Orange Design System",
  //   description:
  //     "From Figma native component library to Organizational default design system living on Claude, offering engineers and Product Managers a quick pathway to prototyping",
  //   tags: ["Figma", "MCP", "Claude", "Design System", "Component Library"],
  //   label: "Orange gradient",
  //   visual: (
  //     // eslint-disable-next-line @next/next/no-img-element
  //     <img className="home-projects__bg" src="/assets/home/project-orange-bg.jpg" alt="" loading="lazy" />
  //   ),
  // },
  {
    title: "Tokenized Trade Finance",
    description: OTC_COPY,
    tags: ["Trade Financing", "Fintech", "Investments", "Tokenization"],
    label: "WeWire trade finance marketplace dashboard",
    visual: (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="home-projects__bg" src="/assets/home/project-orange-bg.jpg" alt="" loading="lazy" />
        <MarketplaceMockup />
      </>
    ),
  },
];

function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="home-projects__content">
      <div className="home-projects__text">
        <h3 className="home-projects__title">{project.title}</h3>
        <p className="home-projects__description">{project.description}</p>
        <ul className="home-projects__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="chip home-projects__chip">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="home-projects__visual" role="img" aria-label={project.label}>
        <div className="home-projects__media" aria-hidden="true">
          <div className="home-projects__stage">{project.visual}</div>
        </div>
      </div>
    </div>
  );
}

/** Home projects list (Figma 1001:12872). */
export default function Projects() {
  return (
    <section className="home-projects container" aria-labelledby="home-projects-heading">
      <h2 id="home-projects-heading" className="sr-only">
        Projects
      </h2>
      {PROJECTS.map((project) =>
        project.href ? (
          <Link key={project.title} href={project.href} className="home-projects__row home-projects__row--link">
            <ProjectBody project={project} />
          </Link>
        ) : (
          <article key={project.title} className="home-projects__row">
            <ProjectBody project={project} />
          </article>
        ),
      )}
    </section>
  );
}
