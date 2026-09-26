import type { Locale } from "@/config/i18n";
import { Link } from "@/config/navigation";
import type { PricingCopy } from "@/content/pricing-copy";
import { getPricing, formatStartingPrice } from "@/content/pricing";
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
  const prices = getPricing();
  const selected = preview ? [prices[0], prices[5], prices[6]] : prices;
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
      <div className="pricing-catalog">
        {selected.map((level, i) => {
          const item = copy.items[level.id];
          const title = preview ? copy.groups[i] : item.title;
          return (
            <article
              key={level.id}
              className="pricing-entry"
              data-pricing-id={level.id}
            >
              {!preview && (
                <span className="pricing-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <div className="pricing-copy">
                <h3>{title}</h3>
                {!preview && <p>{item.description}</p>}
              </div>
            <p className="pricing-amount">
              {!preview && copy.from}
                <strong>
                  {formatStartingPrice(
                    level.startingPrice,
                    level.currency,
                    locale,
                  )}
                </strong>
              {preview ? <span>{copy.previewFrom}</span> : copy.suffix}
              </p>
              {!preview && (
                <a
                  className="text-link pricing-inquiry"
                  href={whatsappInquiry(
                    copy.inquiry.replace("{service}", item.title),
                  )}
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
        })}
      </div>
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
