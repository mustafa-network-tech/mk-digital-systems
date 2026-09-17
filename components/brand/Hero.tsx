import Image from "next/image";
import { contactConfig } from "@/lib/contact-config";
import { Link } from "@/config/navigation";
import type { SiteContent } from "@/content/site";
import { Arrow } from "./Arrow";
export function Hero({
  copy,
  work,
}: {
  copy: SiteContent["hero"];
  work: SiteContent["work"];
}) {
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
            <span>{work.stories.santiye.industry}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="hero-screen-image">
            <Image
              src="/work/santiye-yonetim-sistemi.webp"
              alt={work.stories.santiye.alt}
              fill
              priority
              sizes="(max-width: 767px) 48vw, 450px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="hero-screen hero-screen-secondary">
          <div className="screen-chrome">
            <span>MK FARM</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="hero-screen-image">
            <Image
              src="/work/mk-farm.webp"
              alt={work.stories["mk-farm"].alt}
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
