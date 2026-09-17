export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">
        <span className="live-dot" aria-hidden="true" />
        {label}
      </p>
      <h1>{title}</h1>
      <p className="intro-description">{description}</p>
    </section>
  );
}
