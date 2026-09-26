import { setRequestLocale } from "next-intl/server";
import { Pricing } from "@/components/brand/Pricing";
import { getContent } from "@/content/site";
import { projectsForService, type ServiceId } from "@/content/projects";
import { getProjectCopy } from "@/content/project-copy";
import { getHomeCopy } from "@/content/home";
import { getSolutionsCopy } from "@/content/solutions";
import { validLocale, pageMetadata, pageSchema } from "@/lib/seo";
import { Link } from "@/config/navigation";
import { JsonLd } from "@/components/brand/JsonLd";
import { PageIntro } from "@/components/brand/PageIntro";
import { Process } from "@/components/brand/Process";
import { SolutionsOverview } from "@/components/brand/SolutionsOverview";
import { Arrow } from "@/components/brand/Arrow";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  return pageMetadata(validLocale((await params).locale), "solutions");
}
export default async function Solutions({ params }: Props) {
  const locale = validLocale((await params).locale);
  setRequestLocale(locale);
  const c = getContent(locale);
  const solutions = getSolutionsCopy(locale);
  const home = getHomeCopy(locale);
  if (solutions && home)
    return (
      <>
        <JsonLd data={pageSchema(locale, "solutions")} />
        <PageIntro label={solutions.hub.label} title={solutions.hub.title} description={solutions.hub.description} />
        <section className="section wrap solutions-hub" aria-labelledby="solutions-axes">
          <h2 id="solutions-axes" className="story-label">
            {solutions.hub.axesTitle}
          </h2>
          <SolutionsOverview locale={locale} c={c} labels={home.solutions} />
        </section>
        <section className="section wrap solutions-support" aria-labelledby="solutions-support">
          <div>
            <p className="eyebrow">{solutions.page.support}</p>
            <h2 id="solutions-support">{solutions.hub.support.title}</h2>
          </div>
          <div>
            <p className="section-description">{solutions.hub.support.text}</p>
            <Link className="text-link" href={{ pathname: "/contact", query: { type: "support" } }}>
              {c.contact.types.support}
              <Arrow />
            </Link>
          </div>
        </section>
        <Pricing locale={locale} copy={c.pricing} />
      </>
    );
  // Languages not written yet keep the previous single-page layout.
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
          // Example: the first verified project for this service family (flagship first).
          const p = projectsForService(item.id as ServiceId).find((p) => p.status);
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
                  <Link className="solution-example" href={{ pathname: "/work", hash: p.id }}>
                    <div>
                      <span>{c.solutions.example}</span>
                      <strong>{getProjectCopy(locale, p.id).name ?? p.name}</strong>
                    </div>
                    <Arrow diagonal />
                  </Link>
                )}
                <div className="solution-links">
                  <Link className="button" href={{ pathname: "/contact", query: { type: item.id } }}>
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
