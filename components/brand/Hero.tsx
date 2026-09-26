import { contactConfig } from "@/lib/contact-config";
import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import type { SiteContent } from "@/content/site";
import { getProject } from "@/content/projects";
import { getProjectCopy } from "@/content/project-copy";
import { heroNeedSlides, heroRotation, heroSlides } from "@/content/hero";
import { Arrow } from "./Arrow";
import { HeroStage, type StageSlide } from "./HeroStage";

export function Hero({
  copy,
  statuses,
  locale,
}: {
  copy: SiteContent["hero"];
  statuses: SiteContent["work"]["statuses"];
  locale: Locale;
}) {
  const slides: StageSlide[] = heroSlides.map((slide) => {
    const project = slide.project ? getProject(slide.project) : undefined;
    const projectCopy = project ? getProjectCopy(locale, project.id) : undefined;
    const name = projectCopy?.name ?? project?.name ?? slide.name ?? slide.id;
    const category = copy.categories[slide.id];
    // Flagship systems show their verified status; other work shows what kind of work it is.
    const tag = !project
      ? copy.tags[slide.kind ?? "selected"]
      : project.layer === "flagship" && project.status
        ? statuses[project.status]
        : copy.tags[project.layer === "sector-demo" ? "sector-demo" : "selected"];
    return {
      id: slide.id,
      layout: slide.layout,
      name,
      category,
      tag,
      screens: slide.screens.map((screen, i) => ({
        ...screen,
        alt: i === 0 ? `${name} — ${category}` : "",
      })),
      logo: slide.logo,
    };
  });
  return (
    <section className="hero hero-v2">
      <div className="wrap">
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
      </div>
      <HeroStage
        slides={slides}
        rotation={heroRotation}
        needSlides={heroNeedSlides}
        copy={{
          visual: copy.visual,
          needsLabel: copy.needsLabel,
          needs: copy.needs,
          stage: copy.stage,
        }}
      />
    </section>
  );
}
