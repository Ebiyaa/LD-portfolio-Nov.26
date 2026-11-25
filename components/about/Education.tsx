import "./about-section.css";
import "./education.css";

const DEGREES = [
  {
    degree: "MSc Interaction & Experience Design",
    school: "University of Limerick",
    description:
      "Postgraduate research & design programme focused on interaction design, UX research methods and human-centred design.",
    year: "2025 - 2026",
  },
  {
    degree: "Information Studies & Psychology",
    school: "University of Ghana",
    description:
      "Undergraduate degree combining information studies and psychology, grounding a human-centered and behavioral approach to design.",
    year: "2017",
  },
];

/** Education (Figma 1:14265). */
export default function Education() {
  return (
    <section className="about-section about-education">
      <div className="about-section__intro">
        <h2 className="about-section__heading">Education</h2>
        <p className="about-section__lede">
          With a background in UX, Interaction Design, Psychology and Information Studies, I apply human-centered design
          principles and research methods to understand user behavior, needs and pain points; turning complex
          requirements into simple interfaces.
        </p>
      </div>
      <ul className="about-education__list">
        {DEGREES.map((d) => (
          <li key={d.degree} className="about-education__row">
            <div className="about-education__title">
              <h3 className="about-education__degree">{d.degree}</h3>
              <p className="about-education__school">{d.school}</p>
            </div>
            <p className="about-education__description">{d.description}</p>
            <p className="about-education__year">{d.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
