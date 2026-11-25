import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Education from "@/components/about/Education";
import Skills from "@/components/about/Skills";
import Featured from "@/components/about/Featured";

export const metadata: Metadata = {
  title: "About",
};

/** About page (Figma 1:14135). Nav and Connect footer come from the root layout. */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Education />
      <Skills />
      <Featured />
    </>
  );
}
