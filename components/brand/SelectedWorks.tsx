import Image from "next/image";
import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import type { SiteContent } from "@/content/site";
import type { HomeCopy } from "@/content/home";
import { otherSystems, selectedStories } from "@/content/home";
import { getProjectCopy } from "@/content/project-copy";
import { getCaseStudy } from "@/content/case-studies";
import { ProjectStory, projectLinks } from "./ProjectStory";
import { Arrow } from "./Arrow";

/**
 * Selected Works: proof and story. Case studies as full stories with a screen the
 * hero does not show, then a thin line of other live systems. All derived from data.
 */
export function SelectedWorks({ copy, c, locale }: { copy: HomeCopy["selectedWorks"]; c: SiteContent; locale: Locale }) {
  const stories = selectedStories();
  const others = otherSystems();
  return (
    <section className="section wrap selected-work" aria-labelledby="selected-work-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">{copy.label}</p>
          <h2 id="selected-work-title">{copy.title}</h2>
        </div>
        <div className="section-description">
          <p>{copy.description}</p>
          <Link className="text-link" href="/work">
            {c.work.all}
            <Arrow />
          </Link>
        </div>
      </div>
      <div className="stories-list">
        {stories.map(({ project, screen }, i) => (
          <ProjectStory
            key={project.id}
            project={{ ...project, media: { src: screen.src, frame: screen.frame } }}
            alt={getCaseStudyAlt(locale, project.id, screen.id)}
            copy={c.work}
            caseLabel={c.caseStudy.read}
            locale={locale}
            index={i}
          />
        ))}
      </div>
      {others.length > 0 && (
        <div className="other-systems" aria-labelledby="other-systems-title">
          <h3 id="other-systems-title" className="story-label">
            {copy.others}
          </h3>
          <ul>
            {others.map((p) => {
              const story = getProjectCopy(locale, p.id);
              const name = story.name ?? p.name;
              const link = projectLinks(p, locale, c.work.linkLabels)[0];
              return (
                <li key={p.id}>
                  <div className="other-system-shot">
                    <Image src={p.media!.src} alt={story.alt ?? name} fill sizes="120px" />
                  </div>
                  <div className="other-system-copy">
                    <span className="eyebrow">{story.industry}</span>
                    <strong>{name}</strong>
                    <span>{story.summary}</span>
                  </div>
                  <div className="other-system-links">
                    {p.status && (
                      <span className={`project-status status-${p.status}`}>{c.work.statuses[p.status]}</span>
                    )}
                    {link && (
                      <a
                        className="text-link"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} — ${name}`}
                      >
                        {link.label}
                        <Arrow diagonal />
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

/** Alt text of the case study screen, so the home image says what it shows. */
function getCaseStudyAlt(locale: Locale, id: Parameters<typeof getCaseStudy>[1], screen: string) {
  return getCaseStudy(locale, id)?.screens[screen]?.alt;
}
