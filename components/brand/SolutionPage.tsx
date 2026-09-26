import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import type { SiteContent } from "@/content/site";
import type { PricingCopy } from "@/content/pricing-copy";
import { formatStartingPrice, getPricing, marketForLocale } from "@/content/pricing";
import { getCaseStudy } from "@/content/case-studies";
import { getProjectCopy } from "@/content/project-copy";
import {
  getSolutionsCopy,
  solutionBriefType,
  solutionIds,
  solutionPrices,
  solutionProjects,
  solutionRoutes,
  supportPricingIds,
  type SolutionId,
} from "@/content/solutions";
import { whatsappInquiry } from "@/lib/contact-config";
import { WorkCard } from "./WorkCard";
import { Arrow } from "./Arrow";

type Copy = SiteContent & { pricing: PricingCopy };

/**
 * A solution page: need → approach → what we build → real work → starting prices →
 * questions → other solutions → contact. Copy from content/solutions, work from
 * content/projects, prices from content/pricing; nothing is hard-coded here.
 */
export function SolutionPage({ id, locale, c }: { id: SolutionId; locale: Locale; c: Copy }) {
  const all = getSolutionsCopy(locale)!;
  const copy = all.items[id];
  const labels = all.page;
  const work = solutionProjects(id);
  const stories = work.filter((p) => getCaseStudy(locale, p.id));
  const market = marketForLocale(locale);
  const prices = solutionPrices(id, locale);
  const support = id === "web" && market
    ? getPricing(market).filter((level) => (supportPricingIds as readonly string[]).includes(level.id))
    : [];
  const briefType = solutionBriefType(id);
  let n = 0;
  const number = () => String(++n).padStart(2, "0");
  const priceRow = (level: (typeof prices)[number]) => (
    <article key={level.id} className="pricing-entry" data-pricing-id={level.id}>
      <div className="pricing-copy">
        <h3>{c.pricing.items[level.id].title}</h3>
        <p>{c.pricing.items[level.id].description}</p>
      </div>
      <p className="pricing-amount">
        <strong>{formatStartingPrice(level.startingPrice, level.currency, locale)}</strong>
        {c.pricing.suffix}
      </p>
    </article>
  );
  return (
    <article className="solution-page">
      <header className="case-hero wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">{c.nav.home}</Link>
            </li>
            <li>
              <Link href="/solutions">{c.nav.solutions}</Link>
            </li>
            <li aria-current="page">{copy.name}</li>
          </ol>
        </nav>
        <p className="eyebrow">
          <span className="live-dot" aria-hidden="true" />
          {labels.label} · {copy.name}
        </p>
        <h1>{copy.title}</h1>
        <p className="case-lead">{copy.lead}</p>
        <div className="solution-hero-actions">
          <Link className="button" href={{ pathname: "/contact", query: { type: briefType } }}>
            {labels.ctaPrimary}
            <Arrow />
          </Link>
          <a className="text-link" href="#solution-work">
            {copy.work.heading}
            <Arrow />
          </a>
        </div>
      </header>

      <section className="case-section wrap" aria-labelledby="solution-needs">
        <div className="case-section-head">
          <span className="case-number" aria-hidden="true">{number()}</span>
          <h2 id="solution-needs">{copy.needs.heading}</h2>
        </div>
        <div className="case-section-body">
          <ul className="case-list">
            {copy.needs.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-section wrap" aria-labelledby="solution-method">
        <div className="case-section-head">
          <span className="case-number" aria-hidden="true">{number()}</span>
          <h2 id="solution-method">{copy.method.heading}</h2>
        </div>
        <div className="case-section-body">
          <p className="case-text">{copy.method.text}</p>
          <ul className="case-list">
            {copy.method.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-section wrap" aria-labelledby="solution-builds">
        <div className="case-section-head">
          <span className="case-number" aria-hidden="true">{number()}</span>
          <h2 id="solution-builds">{copy.builds.heading}</h2>
        </div>
        <div className="case-modules">
          {copy.builds.items.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section wrap" id="solution-work" aria-labelledby="solution-work-title">
        <div className="case-section-head">
          <span className="case-number" aria-hidden="true">{number()}</span>
          <h2 id="solution-work-title">{copy.work.heading}</h2>
        </div>
        <div className="case-section-body">
          <p className="case-text">{copy.work.text}</p>
        </div>
        <div className="work-grid solution-work">
          {work.map((p) => (
            <WorkCard key={p.id} project={p} copy={c.work} locale={locale} />
          ))}
        </div>
        {stories.length > 0 && (
          <ul className="solution-stories">
            {stories.map((p) => (
              <li key={p.id}>
                <Link className="text-link" href={{ pathname: "/work/[slug]", params: { slug: p.id } }}>
                  {c.caseStudy.read} · {getProjectCopy(locale, p.id).name ?? p.name}
                  <Arrow />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="case-section wrap" aria-labelledby="solution-prices">
        <div className="case-section-head">
          <span className="case-number" aria-hidden="true">{number()}</span>
          <h2 id="solution-prices">{labels.price}</h2>
        </div>
        {prices.length > 0 ? (
          <div className="pricing-catalog solution-prices">{prices.map(priceRow)}</div>
        ) : (
          <div className="case-section-body">
            <p className="case-text">{c.pricing.quote}</p>
          </div>
        )}
        {support.length > 0 && (
          <>
            <h3 className="pricing-group-title solution-support-title">{labels.support}</h3>
            <div className="pricing-catalog solution-prices">{support.map(priceRow)}</div>
          </>
        )}
        <p className="pricing-disclaimer solution-price-note">{c.pricing.disclaimer}</p>
      </section>

      <section className="case-section wrap" aria-labelledby="solution-faq">
        <div className="case-section-head">
          <span className="case-number" aria-hidden="true">{number()}</span>
          <h2 id="solution-faq">{copy.faq.heading}</h2>
        </div>
        <div className="faq-list">
          {copy.faq.items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <nav className="case-section wrap solution-others" aria-labelledby="solution-others">
        <div className="case-section-head">
          <span className="case-number" aria-hidden="true">{number()}</span>
          <h2 id="solution-others">{labels.others}</h2>
        </div>
        <ul>
          {solutionIds
            .filter((other) => other !== id)
            .map((other) => (
              <li key={other}>
                <Link href={solutionRoutes[other]}>
                  <span>{all.items[other].name}</span>
                  <small>{all.items[other].need}</small>
                  <Arrow diagonal />
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <section className="case-cta" aria-labelledby="solution-cta">
        <div className="wrap">
          <h2 id="solution-cta">{copy.cta.title}</h2>
          <p>{copy.cta.text}</p>
          <div className="case-cta-actions">
            <Link className="button" href={{ pathname: "/contact", query: { type: briefType } }}>
              {labels.ctaPrimary}
              <Arrow />
            </Link>
            <a
              className="text-link"
              href={whatsappInquiry(labels.inquiry.replace("{solution}", copy.name))}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.ctaSecondary}
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
