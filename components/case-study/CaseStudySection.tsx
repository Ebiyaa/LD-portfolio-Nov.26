type Props = {
  /** Anchor id; pass it for sections listed in the TOC. */
  id?: string;
  title: string;
  /** "large" is the bigger film heading on The Delegated Self. */
  size?: "default" | "large";
  className?: string;
  children: React.ReactNode;
};

/** Long-form section: 20px heading, then body copy/figures 16px apart. */
export default function CaseStudySection({ id, title, size = "default", className, children }: Props) {
  const cls = ["cs-section", className].filter(Boolean).join(" ");
  return (
    <section id={id} className={cls}>
      <h2 className={size === "large" ? "cs-section__title cs-section__title--large" : "cs-section__title"}>{title}</h2>
      <div className="cs-section__body">{children}</div>
    </section>
  );
}
