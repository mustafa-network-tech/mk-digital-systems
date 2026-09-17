import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import type { ProjectRecord } from "@/content/projects";
import type { SiteContent } from "@/content/site";
import { projectStatus } from "@/content/project-stories";
import { ProjectScene } from "./ProjectScene";
import { Arrow } from "./Arrow";
export function ProjectStory({
  project,
  copy,
  locale,
  full = false,
  index = 0,
}: {
  project: ProjectRecord;
  copy: SiteContent["work"];
  locale: Locale;
  full?: boolean;
  index?: number;
}) {
  const story = copy.stories[project.id];
  const Heading = full ? "h2" : "h3";
  return (
    <article
      id={project.id}
      className={`project-story story-${index % 3} ${full ? "story-full" : ""}`}
    >
      <ProjectScene
        project={project}
        story={story}
        diagramLabel={copy.diagram}
      />
      <div className="story-copy">
        <div className="story-meta">
          <span className="eyebrow">{story.industry}</span>
          <span className={`project-status status-${project.status}`}>
            {projectStatus[locale][project.status]}
          </span>
        </div>
        <p className="project-name">{story.name || project.name}</p>
        <Heading className="story-title">{story.headline}</Heading>
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
        {full && (
          <div className="story-features">
            <p className="story-label">{copy.experience}</p>
            <ul>
              {story.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="story-links">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label={`${copy.explore} — ${story.name || project.name}`}
            >
              {copy.explore}
              <Arrow diagonal />
            </a>
          ) : (
            <Link
              className="text-link"
              href={`/contact?project=${project.id}`}
              aria-label={`${copy.discuss} — ${story.name || project.name}`}
            >
              {copy.discuss}
              <Arrow diagonal />
            </Link>
          )}
          {!full && (
            <Link
              href={`/work#${project.id}`}
              className="story-more"
              aria-label={`${copy.all} — ${story.name || project.name}`}
            >
              <Arrow />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
