import type { SiteContent } from "@/content/site";
export function Process({ copy }: { copy: SiteContent["process"] }) {
  return (
    <section className="process-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{copy.label}</p>
            <h2>{copy.title}</h2>
          </div>
          <p className="section-description">{copy.description}</p>
        </div>
        <ol className="process-steps">
          {copy.steps.map((step, i) => (
            <li key={step.title}>
              <span className="process-marker" aria-hidden="true">
                {i === 0
                  ? "◎"
                  : i === 1
                    ? "◇"
                    : i === 2
                      ? "⊞"
                      : i === 3
                        ? "↗"
                        : "✳"}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
