import type { Locale } from "@/config/i18n";
import { Link } from "@/config/navigation";
import type { PricingCopy } from "@/content/pricing-copy";
import {
  formatStartingPrice,
  getPricing,
  marketForLocale,
  pricingGroups,
} from "@/content/pricing";
import { getSolutionsCopy, solutionIds, solutionRoutes, solutionStartingPrice } from "@/content/solutions";
import { contactConfig, whatsappInquiry } from "@/lib/contact-config";
import { Arrow } from "./Arrow";

export function Pricing({
  locale,
  copy,
  preview = false,
}: {
  locale: Locale;
  copy: PricingCopy;
  preview?: boolean;
}) {
  const market = marketForLocale(locale);
  const prices = market ? getPricing(market) : getPricing();
  type Level = (typeof prices)[number];
  const amount = (level: Level) =>
    !market ? (
      <p className="pricing-amount pricing-quote">{copy.quote}</p>
    ) : (
      <p className="pricing-amount">
        {!preview && copy.from}
        <strong>{formatStartingPrice(level.startingPrice, level.currency, locale)}</strong>
        {preview ? <span>{copy.previewFrom}</span> : copy.suffix}
      </p>
    );
  const entry = (level: Level, index: number, Title: "h3" | "h4") => {
    const item = copy.items[level.id];
    return (
      <article key={level.id} className="pricing-entry" data-pricing-id={level.id}>
        <span className="pricing-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="pricing-copy">
          <Title>{item.title}</Title>
          <p>{item.description}</p>
        </div>
        {amount(level)}
        <a
          className="text-link pricing-inquiry"
          href={whatsappInquiry(copy.inquiry.replace("{service}", item.title))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${copy.cta} — ${item.title}`}
        >
          {copy.cta}
          <Arrow diagonal />
        </a>
      </article>
    );
  };
  // Home preview: one row per solution axis at its lowest starting price (derived, never typed in).
  const solutions = getSolutionsCopy(locale);
  const previewRows = market && solutions
    ? solutionIds.map((id) => ({ id, name: solutions.items[id].name, level: solutionStartingPrice(id, locale)! }))
    : [];
  return (
    <section
      id={preview ? "starting-prices" : "pricing"}
      className={`section wrap pricing-section ${preview ? "pricing-preview" : "pricing-full"}`}
      aria-labelledby={preview ? "pricing-preview-title" : "pricing-title"}
    >
      <div className="section-head">
        <div>
          <p className="eyebrow">{copy.label}</p>
          <h2 id={preview ? "pricing-preview-title" : "pricing-title"}>
            {preview ? copy.previewTitle : copy.title}
          </h2>
        </div>
        <p className="section-description">
          {preview ? copy.previewDescription : copy.description}
        </p>
      </div>
      {preview ? (
        previewRows.length ? (
          <div className="pricing-catalog">
            {previewRows.map(({ id, name, level }) => (
              <article key={id} className="pricing-entry" data-solution={id} data-pricing-id={level.id}>
                <div className="pricing-copy">
                  <h3>
                    <Link href={solutionRoutes[id]}>{name}</Link>
                  </h3>
                </div>
                {amount(level)}
              </article>
            ))}
          </div>
        ) : (
          // Other markets: one project-based quotation, not four identical rows.
          <div className="pricing-quote-block">
            <p className="pricing-amount pricing-quote">{copy.quote}</p>
          </div>
        )
      ) : (
        pricingGroups.map((group) => (
          <div key={group} className="pricing-group" data-pricing-group={group}>
            <h3 className="pricing-group-title">{copy.groupTitles[group]}</h3>
            <div className="pricing-catalog">
              {prices
                .filter((level) => level.group === group)
                .map((level) => entry(level, prices.indexOf(level), "h4"))}
            </div>
          </div>
        ))
      )}
      <div className="pricing-bottom">
        <p className="pricing-disclaimer">{copy.disclaimer}</p>
        {preview && (
          <Link className="text-link" href={{ pathname: "/solutions", hash: "pricing" }}>
            {copy.viewAll}
            <Arrow />
          </Link>
        )}
      </div>
      {!preview && (
        <div className="pricing-contact">
          <h3>{copy.contactTitle}</h3>
          <div className="pricing-contact-links">
            <a className="text-link" href={contactConfig.phoneHref}>
              {copy.call}
              <Arrow diagonal />
            </a>
            <a
              className="button"
              href={contactConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.whatsapp}
              <Arrow diagonal />
            </a>
            <a className="text-link" href={contactConfig.emailHref}>
              {copy.email}
              <Arrow diagonal />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
