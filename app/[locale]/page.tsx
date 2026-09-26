import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content/site";
import { getHomeCopy } from "@/content/home";
import { validLocale, pageMetadata, pageSchema } from "@/lib/seo";
import { Link } from "@/config/navigation";
import { Hero } from "@/components/brand/Hero";
import { Process } from "@/components/brand/Process";
import { Arrow } from "@/components/brand/Arrow";
import { JsonLd } from "@/components/brand/JsonLd";
import { Pricing } from "@/components/brand/Pricing";
import { SelectedWorks } from "@/components/brand/SelectedWorks";
import { SolutionsOverview } from "@/components/brand/SolutionsOverview";
import { FinalCta, Founder, HomeFaq } from "@/components/brand/HomeSections";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  return pageMetadata(validLocale((await params).locale), "home");
}
/**
 * Hero → Selected Works → Solutions → Founder → Process → Starting prices → FAQ →
 * Final CTA. Each section has one job; copy lives in content/home and content/solutions.
 */
export default async function HomePage({ params }: Props) {
  const locale = validLocale((await params).locale);
  setRequestLocale(locale);
  const c = getContent(locale);
  const home = getHomeCopy(locale);
  return (
    <>
      <JsonLd data={pageSchema(locale, "home")} />
      <Hero copy={c.hero} statuses={c.work.statuses} locale={locale} />
      <SelectedWorks copy={home.selectedWorks} c={c} locale={locale} />
      <section className="section wrap home-solutions" aria-labelledby="home-solutions-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">{home.solutions.label}</p>
            <h2 id="home-solutions-title">{home.solutions.title}</h2>
          </div>
          <div className="section-description">
            <p>{home.solutions.description}</p>
            <Link className="text-link" href="/solutions">
              {home.solutions.all}
              <Arrow />
            </Link>
          </div>
        </div>
        <SolutionsOverview locale={locale} c={c} labels={home.solutions} />
      </section>
      <Founder copy={home.founder} />
      <Process copy={c.process} />
      <Pricing locale={locale} copy={c.pricing} preview />
      <HomeFaq copy={home.faq} />
      <FinalCta copy={home.finalCta} c={c} />
    </>
  );
}
