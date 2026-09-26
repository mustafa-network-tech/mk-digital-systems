import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content/site";
import { projectsByLayer } from "@/content/projects";
import { validLocale, pageMetadata, pageSchema } from "@/lib/seo";
import { Link } from "@/config/navigation";
import { Hero } from "@/components/brand/Hero";
import { NeedsExplorer } from "@/components/brand/NeedsExplorer";
import { ProjectStory } from "@/components/brand/ProjectStory";
import { Process } from "@/components/brand/Process";
import { Arrow } from "@/components/brand/Arrow";
import { JsonLd } from "@/components/brand/JsonLd";
import { Pricing } from "@/components/brand/Pricing";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  return pageMetadata(validLocale((await params).locale), "home");
}
export default async function HomePage({ params }: Props) {
  const locale = validLocale((await params).locale);
  setRequestLocale(locale);
  const c = getContent(locale);
  return (
    <>
      <JsonLd data={pageSchema(locale, "home")} />
      <Hero copy={c.hero} locale={locale} />
      <section className="section wrap needs-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">{c.needs.label}</p>
            <h2>{c.needs.title}</h2>
          </div>
          <p className="section-description">{c.needs.description}</p>
        </div>
        <NeedsExplorer copy={c.needs} />
      </section>
      <section className="section wrap selected-work">
        <div className="section-head">
          <div>
            <p className="eyebrow">{c.work.label}</p>
            <h2>{c.work.title}</h2>
          </div>
          <div className="section-description">
            <p>{c.work.description}</p>
            <Link className="text-link" href="/work">
              {c.work.all}
              <Arrow />
            </Link>
          </div>
        </div>
        <div className="stories-list">
          {projectsByLayer("flagship").slice(0, 6).map((p, i) => (
            <ProjectStory
              key={p.id}
              project={p}
              copy={c.work}
              locale={locale}
              index={i}
            />
          ))}
        </div>
      </section>
      <section className="capabilities-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">{c.solutions.label}</p>
              <h2>{c.solutions.title}</h2>
            </div>
            <p className="section-description">{c.solutions.description}</p>
          </div>
          <div className="capability-list">
            {c.solutions.items.map((item, i) => (
              <Link href={{ pathname: "/solutions", hash: item.id }} key={item.id}>
                <span className="capability-symbol" aria-hidden="true">
                  {["◇", "⊞", "◎", "✳"][i]}
                </span>
                <h3>{item.title}</h3>
                <Arrow diagonal />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Process copy={c.process} />
      <Pricing locale={locale} copy={c.pricing} preview />
      <section className="section wrap industry-section">
        <p className="eyebrow">{c.industries.label}</p>
        <div className="industry-content">
          <div>
            <h2>{c.industries.title}</h2>
            <p>{c.industries.description}</p>
          </div>
          <ul>
            {c.industries.items.map((s) => (
              <li key={s}>
                {s}
                <span aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
