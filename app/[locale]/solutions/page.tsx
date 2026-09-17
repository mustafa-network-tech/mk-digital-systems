import { setRequestLocale } from "next-intl/server";
import { Pricing } from "@/components/brand/Pricing";
import { getContent } from "@/content/site";
import { selectedProjects } from "@/content/projects";
import { validLocale, pageMetadata, pageSchema } from "@/lib/seo";
import { Link } from "@/config/navigation";
import { JsonLd } from "@/components/brand/JsonLd";
import { PageIntro } from "@/components/brand/PageIntro";
import { Process } from "@/components/brand/Process";
import { Arrow } from "@/components/brand/Arrow";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  return pageMetadata(validLocale((await params).locale), "solutions");
}
export default async function Solutions({ params }: Props) {
  const locale = validLocale((await params).locale);
  setRequestLocale(locale);
  const c = getContent(locale);
  return (
    <>
      <JsonLd data={pageSchema(locale, "solutions")} />
      <PageIntro
        label={c.solutions.label}
        title={c.solutions.title}
        description={c.solutions.description}
      />
      <div className="solutions-list wrap">
        {c.solutions.items.map((item, i) => {
          const p = selectedProjects.find((p) => p.id === item.project);
          return (
            <section id={item.id} key={item.id} className="solution-family">
              <div>
                <span className="solution-icon" aria-hidden="true">
                  {["◇", "⊞", "◎", "✳"][i]}
                </span>
                <h2>{item.title}</h2>
              </div>
              <div>
                <p className="solution-description">{item.description}</p>
                <div className="solution-details">
                  <div>
                    <h3>{c.solutions.audience}</h3>
                    <p>{item.for}</p>
                  </div>
                  <div>
                    <h3>{c.solutions.builds}</h3>
                    <ul>
                      {item.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {p && (
                  <Link className="solution-example" href={`/work#${p.id}`}>
                    <div>
                      <span>{c.solutions.example}</span>
                      <strong>{p.name}</strong>
                    </div>
                    <Arrow diagonal />
                  </Link>
                )}
                <div className="solution-links">
                  <Link className="button" href={`/contact?type=${item.id}`}>
                    {c.solutions.cta}
                    <Arrow diagonal />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <Process copy={c.process} />
      <Pricing locale={locale} copy={c.pricing} />
    </>
  );
}
