import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import type { Project, ProjectLink } from "@/content/projects";
import { getProjectCopy } from "@/content/project-copy";
import { getCaseStudy } from "@/content/case-studies";
import type { SiteContent } from "@/content/site";
import { ProjectScene } from "./ProjectScene";
import { Arrow } from "./Arrow";
import { whatsappInquiry } from "@/lib/contact-config";

/** A project's own links plus the links of its parts, labelled with the part name. */
export function projectLinks(
  project: Project,
  locale: Locale,
  labels: SiteContent["work"]["linkLabels"],
): (ProjectLink & { label: string })[] {
  const story = getProjectCopy(locale, project.id);
  return [
    ...project.links.map((link) => ({ ...link, label: labels[link.kind] })),
    ...(project.parts ?? []).flatMap((part) =>
      part.links.map((link) => ({
        ...link,
        label: `${story.parts?.[part.id]?.name ?? part.id} · ${labels[link.kind]}`,
      })),
    ),
  ];
}

export function ProjectStory({
  project,
  copy,
  locale,
  full = false,
  index = 0,
  caseLabel,
}: {
  project: Project;
  copy: SiteContent["work"];
  locale: Locale;
  full?: boolean;
  index?: number;
  /** "Read the case study" label; the link appears only when one is written. */
  caseLabel?: string;
}) {
  const story = getProjectCopy(locale, project.id);
  const name = story.name || project.name;
  const links = projectLinks(project, locale, copy.linkLabels);
  const shown = full ? links : links.slice(0, 1);
  const hasCase = !!caseLabel && !!getCaseStudy(locale, project.id);
  const caseHref = { pathname: "/work/[slug]" as const, params: { slug: project.id } };
  return (
    <article
      id={project.id}
      className={`project-story story-${index % 3} ${full ? "story-full" : ""}`}
    >
      <ProjectScene project={project} story={story} diagramLabel={copy.diagram} />
      <div className="story-copy">
        <div className="story-meta">
          <span className="eyebrow">{story.industry}</span>
          {project.status && (
            <span className={`project-status status-${project.status}`}>
              {copy.statuses[project.status]}
            </span>
          )}
        </div>
        <p className="project-name">{name}</p>
        <h3 className="story-title">{story.headline ?? story.summary}</h3>
        {story.problem && story.solution && (
          <div className="story-explanation">
            <div>
              <p className="story-label">{copy.problem}</p>
              <p>{story.problem}</p>
            </div>
            <div>
              <p className="story-label">{copy.solution}</p>
              <p>{story.solution}</p>
            </div>
          </div>
        )}
        {project.confidential && <p className="story-confidential">{copy.confidential}</p>}
        {full && project.parts && (
          <ul className="story-parts">
            {project.parts.map((part) => (
              <li key={part.id}>
                <strong>{story.parts?.[part.id]?.name ?? part.id}</strong>
                {part.status && (
                  <span className={`project-status status-${part.status}`}>
                    {copy.statuses[part.status]}
                  </span>
                )}
                <span>{story.parts?.[part.id]?.description}</span>
              </li>
            ))}
          </ul>
        )}
        {full && story.modules && (
          <div className="story-features">
            <p className="story-label">{copy.experience}</p>
            <ul>
              {story.modules.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="story-links">
          {full && hasCase && (
            <Link href={caseHref} className="button button-small">
              {caseLabel}
              <Arrow />
            </Link>
          )}
          {project.status === "coming-soon" ? null : shown.length ? (
            shown.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
                aria-label={`${link.label} — ${name}`}
              >
                {link.label}
                <Arrow diagonal />
              </a>
            ))
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
          {!full && (
            <Link
              href={hasCase ? caseHref : { pathname: "/work", hash: project.id }}
              className="story-more"
              aria-label={hasCase ? `${caseLabel} — ${name}` : `${copy.all} — ${name}`}
            >
              <Arrow />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
