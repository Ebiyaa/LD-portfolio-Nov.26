import HeroActions from "@/components/site/HeroActions";
import "./about-hero.css";

/** About hero (Figma 1:14138). */
export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__inner">
        <div className="about-hero__heading">
          <h1 className="about-hero__name">Ebi-Yaa Kwaw</h1>
          <p className="about-hero__pronounce">
            <span className="about-hero__pronounce-label">pronounced</span>
            <span className="about-hero__pill">/eibi:jaa/</span>
          </p>
        </div>
        <p className="about-hero__intro">
          UX &amp; interaction designer based in Ireland, with 4 years of experience.
          <br />I specialize in delivering end-to-end customer platforms and internal tools across different industries.
          Working with software agencies and product-led companies, I have learned to combine deep expertise in fintech
          with a broad understanding of various topics, helping me balance specialization with collaboration.
        </p>
      </div>
      <HeroActions />
    </section>
  );
}
