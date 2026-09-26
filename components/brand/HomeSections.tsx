import Image from "next/image";
import { Link } from "@/config/navigation";
import type { HomeCopy } from "@/content/home";
import type { SiteContent } from "@/content/site";
import { briefTypes } from "@/content/brief";
import { contactConfig } from "@/lib/contact-config";
import { Arrow } from "./Arrow";

/**
 * Founder: why the systems start from the work itself. Text first; a real portrait
 * can be added later through `portrait` (no stock people, never required).
 */
export function Founder({
  copy,
  portrait,
}: {
  copy: HomeCopy["founder"];
  portrait?: { src: string; alt: string; width: number; height: number };
}) {
  return (
    <section className="section wrap founder-section" aria-labelledby="founder-title">
      <div className="founder-head">
        <p className="eyebrow">{copy.label}</p>
        <h2 id="founder-title">{copy.title}</h2>
      </div>
      <div className={`founder-body ${portrait ? "has-portrait" : ""}`}>
        {portrait && (
          <div className="founder-portrait">
            <Image src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} sizes="240px" />
          </div>
        )}
        <div className="founder-copy">
          {copy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="founder-sign">
            <strong>{copy.name}</strong>
            <span>{copy.role}</span>
          </p>
          <Link className="text-link" href={{ pathname: "/work/[slug]", params: { slug: "saha-santiye" } }}>
            {copy.proof}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Questions people ask before starting; native disclosure, no FAQPage markup. */
export function HomeFaq({ copy }: { copy: HomeCopy["faq"] }) {
  return (
    <section className="section wrap home-faq" aria-labelledby="home-faq-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">{copy.label}</p>
          <h2 id="home-faq-title">{copy.title}</h2>
        </div>
      </div>
      <div className="faq-list">
        {copy.items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/**
 * The home page's closing call: start from the need. Each type opens the brief
 * pre-selected (content/brief.ts); channels come from lib/contact-config.
 */
export function FinalCta({ copy, c }: { copy: HomeCopy["finalCta"]; c: SiteContent }) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="wrap">
        <p className="eyebrow">{copy.label}</p>
        <h2 id="final-cta-title">{copy.title}</h2>
        <p className="final-cta-text">{copy.text}</p>
        <p className="final-cta-types-label" id="final-cta-types">
          {copy.types}
        </p>
        <ul className="final-cta-types" aria-labelledby="final-cta-types">
          {briefTypes.map((type) => (
            <li key={type}>
              <Link href={{ pathname: "/contact", query: { type } }}>{c.contact.types[type]}</Link>
            </li>
          ))}
        </ul>
        <div className="final-cta-actions">
          <Link className="button" href="/contact">
            {copy.primary}
            <Arrow />
          </Link>
          <a className="text-link" href={contactConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
            {c.contact.whatsapp}
            <Arrow diagonal />
          </a>
          <a className="text-link" href={contactConfig.emailHref}>
            {contactConfig.email}
            <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}
