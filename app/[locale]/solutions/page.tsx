import { setRequestLocale } from "next-intl/server";
import { Pricing } from "@/components/brand/Pricing";
import { getContent } from "@/content/site";
import { getHomeCopy } from "@/content/home";
import { getSolutionsCopy } from "@/content/solutions";
import { validLocale, pageMetadata, pageSchema } from "@/lib/seo";
import { Link } from "@/config/navigation";
import { JsonLd } from "@/components/brand/JsonLd";
import { PageIntro } from "@/components/brand/PageIntro";
import { SolutionsOverview } from "@/components/brand/SolutionsOverview";
import { Arrow } from "@/components/brand/Arrow";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  return pageMetadata(validLocale((await params).locale), "solutions");
}
/** The four solution axes, the support services and the full starting-price list. */
export default async function Solutions({ params }: Props) {
  const locale = validLocale((await params).locale);
  setRequestLocale(locale);
  const c = getContent(locale);
  const solutions = getSolutionsCopy(locale);
  const home = getHomeCopy(locale);
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
}
