import "./experience.css";

const ROLES = [
  { title: "Senior UX Designer", company: "Wewire Technologies", dates: "May 2025 – Sep 2025" },
  { title: "User Experience Designer", company: "Wewire Technologies", dates: "Jan 2023 – Apr 2025" },
  { title: "User Interface Designer", company: "Effect Studios", dates: "Apr 2022 – Jan 2023" },
];

/** "Relevant Work Experience" (Figma 1001:14026). */
export default function Experience() {
  return (
    <section className="home-experience container" aria-labelledby="home-experience-heading">
      <div className="home-experience__intro">
        <h2 id="home-experience-heading" className="home-experience__heading">
          Relevant Work Experience
        </h2>
        <p className="home-experience__text">
          Turning an OTC trading desk into a digital payments platform that hit $3 billion in transaction volumes,
          trading across 80+ countries, by making FX and stablecoins feel familiar.
        </p>
      </div>
      <ul className="home-experience__list">
        {ROLES.map((role) => (
          <li key={role.title} className="home-experience__role">
            <div className="home-experience__who">
              <h3 className="home-experience__title">{role.title}</h3>
              <p className="home-experience__company">{role.company}</p>
            </div>
            <p className="home-experience__dates">{role.dates}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
