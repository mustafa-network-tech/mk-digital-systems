import Image from "next/image";
import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import type { SiteContent } from "@/content/site";
import { getProject, relatedProjects, type ProjectId } from "@/content/projects";
import { getProjectCopy } from "@/content/project-copy";
import { caseStudyScreens, getCaseStudy, type CaseStudySection } from "@/content/case-studies";
import type { CaseScreen } from "@/content/case-studies/media";
import { whatsappInquiry } from "@/lib/contact-config";
import { briefTypeForService } from "@/content/brief";
import { getSolutionsCopy, isSolutionId, solutionRoutes } from "@/content/solutions";
import { projectLinks } from "./ProjectStory";
import { WorkCard } from "./WorkCard";
import { Arrow } from "./Arrow";

type Copy = SiteContent & { pricing: unknown };

/**
 * Case study page body: who → problem → approach → solution → screens →
 * modules → status → related → CTA. Content comes from content/case-studies,
 * relations from content/projects.ts.
 */
export function CaseStudy({ id, locale, c }: { id: ProjectId; locale: Locale; c: Copy }) {
  const copy = getCaseStudy(locale, id)!;
  const project = getProject(id)!;
  const story = getProjectCopy(locale, id);
  const name = story.name ?? project.name;
  const labels = c.caseStudy;
  const screens = caseStudyScreens(id);
  const heroDesktop = screens.find((s) => s.frame === "desktop");
  const heroPhone = screens.find((s) => s.frame === "phone" && s.part === heroDesktop?.part);
  // Related solutions: the solution pages of the project's service families.
  const solutionPages = getSolutionsCopy(locale);
  const solutions = project.services.filter(isSolutionId).map((s) => ({
    id: s,
    title: solutionPages.items[s].name,
    href: solutionRoutes[s],
  }));
  const related = relatedProjects(id);
  const links = projectLinks(project, locale, c.work.linkLabels);
  const alt = (screen: CaseScreen) => copy.screens[screen.id]?.alt ?? name;
  // Stable ids for the first sections' headings (no visible numbering).
  let n = 0;
  const number = () => String(++n).padStart(2, "0");
  return (
    <article className="case-study">
      <header className="case-hero wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">{c.nav.home}</Link>
            </li>
            <li>
              <Link href="/work">{c.nav.work}</Link>
            </li>
            <li aria-current="page">{name}</li>
          </ol>
        </nav>
        <p className="eyebrow">
          <span className="live-dot" aria-hidden="true" />
          {labels.label} · {name}
        </p>
        <h1>{copy.title}</h1>
        <p className="case-lead">{copy.lead}</p>
        <dl className="case-facts">
          <div>
            <dt>{labels.sector}</dt>
            <dd>{story.industry}</dd>
          </div>
          <div>
            <dt>{labels.services}</dt>
            <dd>{project.services.map((s) => labels.serviceNames[s]).join(" · ")}</dd>
          </div>
          {project.status && (
            <div>
              <dt>{labels.status}</dt>
              <dd>
                <span className={`project-status status-${project.status}`}>{c.work.statuses[project.status]}</span>
              </dd>
            </div>
          )}
        </dl>
      </header>

      {heroDesktop && (
        <div className="case-stage wrap">
          <div className="case-stage-inner">
            <div className="compose-desktop-phone">
              <div className="desktop-frame">
                <div className="desktop-chrome" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <Image
                  src={heroDesktop.src}
                  alt={alt(heroDesktop)}
                  width={heroDesktop.width}
                  height={heroDesktop.height}
                  sizes="(max-width: 767px) 92vw, 1100px"
                  priority
                />
              </div>
              {heroPhone && (
                <div className="phone-frame phone-side">
                  <Image
                    src={heroPhone.src}
                    alt={alt(heroPhone)}
                    width={heroPhone.width}
                    height={heroPhone.height}
                    sizes="(max-width: 767px) 30vw, 240px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Section number={number()} section={copy.audience} />
      <Section number={number()} section={copy.problem} />
      <Section number={number()} section={copy.approach} />

      <section className="case-section wrap" aria-labelledby="case-solution">
        <div className="case-section-head">
          <h2 id="case-solution">{copy.solution.heading}</h2>
        </div>
        <div className="case-section-body">
          <p className="case-text">{copy.solution.text}</p>
          {copy.solution.points && (
            <ul className="case-list">
              {copy.solution.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
        {project.parts && copy.solution.parts && (
          <div className="case-parts">
            {project.parts.map((part) => {
              const partCopy = copy.solution.parts?.[part.id];
              const partName = story.parts?.[part.id]?.name ?? part.id;
              const shot = screens.find((s) => s.part === part.id && s.frame === "desktop");
              if (!partCopy) return null;
              return (
                <div key={part.id} className="case-part">
                  {shot && (
                    <div className="case-part-shot">
                      <Image
                        src={shot.src}
                        alt={alt(shot)}
                        width={shot.width}
                        height={shot.height}
                        sizes="(max-width: 767px) 92vw, 620px"
                      />
                    </div>
                  )}
                  <div className="story-meta">
                    <h3>{partName}</h3>
                    {part.status && (
                      <span className={`project-status status-${part.status}`}>{c.work.statuses[part.status]}</span>
                    )}
                  </div>
                  <p>{partCopy.summary}</p>
                  <ul className="case-list">
                    {partCopy.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="case-section wrap" aria-labelledby="case-screens">
        <div className="case-section-head">
          <h2 id="case-screens">{labels.screensHeading}</h2>
        </div>
        <div className="case-gallery">
          {screens.map((screen) => (
            <figure key={screen.id} className={`case-shot case-shot-${screen.frame}`}>
              <div className={screen.frame === "phone" ? "phone-frame" : "desktop-frame"}>
                {screen.frame === "desktop" && (
                  <div className="desktop-chrome" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                )}
                <Image
                  src={screen.src}
                  alt={alt(screen)}
                  width={screen.width}
                  height={screen.height}
                  sizes={screen.frame === "phone" ? "(max-width: 767px) 60vw, 280px" : "(max-width: 767px) 92vw, 680px"}
                />
              </div>
              <figcaption>{copy.screens[screen.id]?.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="case-note">{copy.screensNote}</p>
      </section>

      <section className="case-section wrap" aria-labelledby="case-modules">
        <div className="case-section-head">
          <h2 id="case-modules">{copy.modules.heading}</h2>
        </div>
        <div className="case-modules">
          {copy.modules.items.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section wrap" aria-labelledby="case-status">
        <div className="case-section-head">
          <h2 id="case-status">{labels.statusHeading}</h2>
        </div>
        <ul className="case-status">
          {(project.parts ?? [{ id: project.id, status: project.status, links: project.links }]).map((part) => (
            <li key={part.id}>
              <strong>{story.parts?.[part.id]?.name ?? name}</strong>
              {part.status && (
                <span className={`project-status status-${part.status}`}>{c.work.statuses[part.status]}</span>
              )}
              <span className="case-status-links">
                {links
                  .filter((link) => part.links.some((l) => l.url === link.url))
                  .map((link) => (
                    <a key={link.url} className="text-link" href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <Arrow diagonal />
                    </a>
                  ))}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {(solutions.length > 0 || related.length > 0) && (
        <section className="case-section wrap" aria-labelledby="case-related">
          <div className="case-section-head">
            <h2 id="case-related">{labels.relatedWork}</h2>
          </div>
          {solutions.length > 0 && (
            <div className="case-solutions">
              <p className="story-label">{labels.relatedSolutions}</p>
              <ul>
                {solutions.map((s) => (
                  <li key={s.id}>
                    <Link className="text-link" href={s.href}>
                      {s.title}
                      <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {related.length > 0 && (
            <div className="work-grid case-related">
              {related.map((p) => (
                <WorkCard key={p.id} project={p} copy={c.work} locale={locale} />
              ))}
            </div>
          )}
        </section>
      )}

      <section className="case-cta" aria-labelledby="case-cta">
        <div className="wrap">
          <h2 id="case-cta">{labels.ctaTitle}</h2>
          <p>{copy.ctaText}</p>
          <div className="case-cta-actions">
            <a
              className="button"
              href={whatsappInquiry(labels.inquiry.replace("{project}", name))}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.ctaPrimary}
              <Arrow diagonal />
            </a>
            <Link className="text-link" href={{ pathname: "/contact", query: { type: briefTypeForService(project.services[0]), project: id } }}>
              {labels.ctaSecondary}
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function Section({ number, section }: { number: string; section: CaseStudySection }) {
  const id = `case-${number}`;
  return (
    <section className="case-section wrap" aria-labelledby={id}>
      <div className="case-section-head">
        <h2 id={id}>{section.heading}</h2>
      </div>
      <div className="case-section-body">
        <p className="case-text">{section.text}</p>
        {section.points && (
          <ul className="case-list">
            {section.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
