import Image from "next/image";
import type { Locale } from "@/config/i18n";
import type { Project } from "@/content/projects";
import { getProjectCopy } from "@/content/project-copy";
import type { SiteContent } from "@/content/site";
import { projectLinks } from "./ProjectStory";
import { Arrow } from "./Arrow";
import { whatsappInquiry } from "@/lib/contact-config";

/** Compact card for the selected-work and sector-website grids on /work. */
export function WorkCard({
  project,
  copy,
  locale,
}: {
  project: Project;
  copy: SiteContent["work"];
  locale: Locale;
}) {
  const story = getProjectCopy(locale, project.id);
  const name = story.name || project.name;
  const link = projectLinks(project, locale, copy.linkLabels)[0];
  const media = project.media;
  return (
    <article id={project.id} className="work-card">
      <div
        className={`work-card-media scene-${project.scene} ${media ? `work-card-${media.frame}` : ""}`}
      >
        {media ? (
          <Image
            src={media.src}
            alt={story.alt ?? name}
            fill
            sizes="(max-width: 767px) 92vw, (max-width: 1100px) 46vw, 440px"
            style={{ objectFit: media.frame === "phone" ? "contain" : "cover" }}
          />
        ) : (
          <span className="work-card-placeholder" aria-hidden="true">
            {name}
          </span>
        )}
      </div>
      <div className="work-card-copy">
        <div className="story-meta">
          <span className="eyebrow">{story.industry}</span>
          {project.status && (
            <span className={`project-status status-${project.status}`}>
              {copy.statuses[project.status]}
            </span>
          )}
        </div>
        <h3 className="work-card-title">{name}</h3>
        <p className="work-card-summary">{story.summary}</p>
        {link ? (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            aria-label={`${link.label} — ${name}`}
          >
            {link.label}
            <Arrow diagonal />
          </a>
        ) : (
          <a
            className="text-link"
            href={whatsappInquiry(copy.inquiry.replace("{project}", name))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${copy.discuss} — ${name}`}
          >
            {copy.discuss}
            <Arrow diagonal />
          </a>
        )}
      </div>
    </article>
  );
}
