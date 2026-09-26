import Image from "next/image";
import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import type { SiteContent } from "@/content/site";
import { getProject } from "@/content/projects";
import { getProjectCopy } from "@/content/project-copy";
import { getSolutionsCopy, solutionIds, solutionRoutes, solutionShowcase } from "@/content/solutions";
import { Arrow } from "./Arrow";

/**
 * The four solution axes as need → approach → real work, one row each.
 * Used on the home page and the solutions hub; examples come from content/solutions.
 */
export function SolutionsOverview({
  locale,
  c,
  labels,
}: {
  locale: Locale;
  c: SiteContent;
  labels: { need: string; approach: string; example: string };
}) {
  const copy = getSolutionsCopy(locale)!;
  return (
    <ol className="solution-rows">
      {solutionIds.map((id, i) => {
        const item = copy.items[id];
        const project = getProject(solutionShowcase[id].home)!;
        const story = getProjectCopy(locale, project.id);
        const name = story.name ?? project.name;
        return (
          <li key={id} id={id} className="solution-row">
            <div className="solution-row-intro">
              <div className="solution-row-head">
                <span className="case-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>
                  <Link href={solutionRoutes[id]}>{item.name}</Link>
                </h3>
              </div>
              <Link
                className="text-link solution-row-more"
                href={solutionRoutes[id]}
                aria-label={`${copy.hub.explore} — ${item.name}`}
              >
                {copy.hub.explore}
                <Arrow />
              </Link>
            </div>
            <dl className="solution-row-copy">
              <div>
                <dt>{labels.need}</dt>
                <dd className="solution-row-need">“{item.need}”</dd>
              </div>
              <div>
                <dt>{labels.approach}</dt>
                <dd>{item.approach}</dd>
              </div>
            </dl>
            <Link className="solution-row-work" href={{ pathname: "/work", hash: project.id }}>
              <span className="solution-row-shot">
                <Image
                  src={project.media!.src}
                  alt={story.alt ?? name}
                  fill
                  sizes="(max-width: 767px) 92vw, 240px"
                />
              </span>
              <span className="solution-row-work-copy">
                <small>{labels.example}</small>
                <strong>{name}</strong>
                <span>
                  {story.industry}
                  {project.status && ` · ${c.work.statuses[project.status]}`}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
