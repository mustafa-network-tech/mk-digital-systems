import Image from "next/image";
import { contactConfig } from "@/lib/contact-config";
import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import type { SiteContent } from "@/content/site";
import { getProject } from "@/content/projects";
import { getProjectCopy } from "@/content/project-copy";
import { Arrow } from "./Arrow";
export function Hero({
  copy,
  locale,
}: {
  copy: SiteContent["hero"];
  locale: Locale;
}) {
  const main = getProject("saha-santiye")!;
  const mainCopy = getProjectCopy(locale, main.id);
  const secondary = getProject("mk-farm")!;
  const secondaryCopy = getProjectCopy(locale, secondary.id);
  return (
    <section className="hero wrap">
      <p className="eyebrow hero-eyebrow">
        <span className="live-dot" aria-hidden="true" />
        {copy.label}
      </p>
      <div className="hero-heading">
        <h1>
          {copy.title}
          <span>{copy.accent}</span>
        </h1>
        <div className="hero-description">
          <p>{copy.description}</p>
          <a
            className="button"
            href={contactConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.primary}
            <Arrow diagonal />
          </a>
          <Link href="/work" className="text-link">
            {copy.secondary}
            <Arrow />
          </Link>
        </div>
      </div>
      <div className="hero-composition" role="group" aria-label={copy.visual}>
        <div className="composition-grid" aria-hidden="true" />
        <div className="composition-brand" aria-hidden="true">
          mk<span>↗</span>
        </div>
        <div className="hero-screen hero-screen-main">
          <div className="screen-chrome">
            <span>
              <i />
              <i />
              <i />
            </span>
            <span>{mainCopy.industry}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="hero-screen-image">
            <Image
              src={main.media!.src}
              alt={mainCopy.alt ?? main.name}
              fill
              priority
              sizes="(max-width: 767px) 48vw, 450px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="hero-screen hero-screen-secondary">
          <div className="screen-chrome">
            <span>{(secondaryCopy.name ?? secondary.name).toUpperCase()}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="hero-screen-image">
            <Image
              src={secondary.media!.src}
              alt={secondaryCopy.alt ?? secondary.name}
              fill
              sizes="(max-width: 767px) 48vw, 450px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="composition-tag">
          <span className="tag-symbol" aria-hidden="true">
            ✳
          </span>
          <span>{copy.caption}</span>
        </div>
        <div className="composition-caption">
          <span>{copy.detail}</span>
          <span aria-hidden="true">↘</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>{copy.note}</span>
        <span>{copy.secondary} ↓</span>
      </div>
    </section>
  );
}
