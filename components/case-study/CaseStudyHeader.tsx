type MetaItem = { label: string; value: string };

type Props = {
  title: string;
  /** Intro copy; may contain several paragraphs and links. */
  intro: React.ReactNode;
  tags: string[];
  meta: MetaItem[];
};

/** Title, intro, outlined tag chips, divider and the meta row (Project type / Year / …). */
export default function CaseStudyHeader({ title, intro, tags, meta }: Props) {
  return (
    <header className="cs-header">
      <div className="cs-header__top">
        <div className="cs-header__text">
          <h1 className="cs-title">{title}</h1>
          <div className="cs-intro">{intro}</div>
        </div>
        <ul className="cs-tags" aria-label="Tags">
          {tags.map((tag) => (
            <li key={tag} className="cs-tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <hr className="cs-rule" />
      <dl className="cs-meta">
        {meta.map(({ label, value }) => (
          <div key={label} className="cs-meta__item">
            <dt className="cs-meta__label">{label}</dt>
            <dd className="cs-meta__value">{value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
