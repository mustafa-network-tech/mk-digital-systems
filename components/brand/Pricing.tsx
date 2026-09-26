import type { Locale } from "@/config/i18n";
import { Link } from "@/config/navigation";
import type { PricingCopy } from "@/content/pricing-copy";
import {
  formatStartingPrice,
  getPricing,
  marketForLocale,
  pricingGroups,
  type PricingId,
} from "@/content/pricing";
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
        {!preview && (
          <span className="pricing-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="pricing-copy">
          <Title>{preview ? copy.groups[index] : item.title}</Title>
          {!preview && <p>{item.description}</p>}
        </div>
        {amount(level)}
        {!preview && (
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
        )}
      </article>
    );
  };
  // Home preview: one entry point per family; Faz 2 revisits which three rows to show.
  const previewIds: PricingId[] = ["landing_page", "custom_software", "operations_system"];
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
        <div className="pricing-catalog">
          {previewIds.map((id, i) => entry(prices.find((p) => p.id === id)!, i, "h3"))}
        </div>
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
