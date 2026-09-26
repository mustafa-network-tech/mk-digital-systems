import Image from "next/image";
import { Link } from "@/config/navigation";
import { cityPageCopy, citySlug, heroExists, readyCities, serviceAreasCopy, type CityPage } from "@/content/cities";
import type { CityBlock } from "@/content/cities/types";
import { getContent } from "@/content/site";
import { getProject } from "@/content/projects";
import { getProjectCopy } from "@/content/project-copy";
import { getCaseStudy } from "@/content/case-studies";
import { formatStartingPrice } from "@/content/pricing";
import { getSolutionsCopy, solutionBriefType, solutionRoutes, solutionStartingPrice } from "@/content/solutions";
import { whatsappInquiry } from "@/lib/contact-config";
import { Arrow } from "./Arrow";

/**
 * A Turkish city page: hero with the city image, then the city's own sections in the
 * order it sets (content/cities). Projects appear as capability examples only.
 */
export function CityPageView({ city }: { city: CityPage }) {
  const c = getContent("tr");
  const solutions = getSolutionsCopy("tr");
  const firstSolution = city.blocks.find((b) => b.kind === "solutions");
  const briefType = firstSolution?.kind === "solutions" ? solutionBriefType(firstSolution.items[0].id) : "unsure";
  const neighbours = readyCities().filter((other) => other.region === city.region && other.id !== city.id);

  const block = (b: CityBlock, i: number) => {
    const id = `city-${b.kind}`;
    switch (b.kind) {
      case "story":
      case "note":
        return (
          <section key={i} className={`case-section wrap city-${b.kind}`} aria-labelledby={id}>
            <div className="case-section-head">
              <h2 id={id}>{b.heading}</h2>
            </div>
            <div className="case-section-body city-prose">
              {b.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        );
      case "economy":
        return (
          <section key={i} className="case-section wrap city-economy" aria-labelledby={id}>
            <div className="case-section-head">
              <h2 id={id}>{b.heading}</h2>
            </div>
            <div className="case-section-body">
              <p className="case-text">{b.intro}</p>
            </div>
            <div className="case-modules city-sectors">
              {b.sectors.map((s) => (
                <div key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case "needs":
        return (
          <section key={i} className="case-section wrap city-needs" aria-labelledby={id}>
            <div className="case-section-head">
              <h2 id={id}>{b.heading}</h2>
            </div>
            <div className="case-section-body">
              {b.intro && <p className="case-text">{b.intro}</p>}
              <dl className="city-need-list">
                {b.items.map((item) => (
                  <div key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        );
      case "solutions":
        return (
          <section key={i} className="case-section wrap city-solutions" aria-labelledby={id}>
            <div className="case-section-head">
              <h2 id={id}>{b.heading}</h2>
            </div>
            <div className="case-section-body">
              <p className="case-text">{b.intro}</p>
            </div>
            <ul className="city-solution-rows">
              {b.items.map((item) => {
                const price = solutionStartingPrice(item.id, "tr");
                return (
                  <li key={item.id} data-solution={item.id}>
                    <h3>{solutions.items[item.id].name}</h3>
                    <p>{item.text}</p>
                    <div className="city-solution-meta">
                      {price && (
                        <span>
                          {cityPageCopy.startingPrice}:{" "}
                          <strong>{formatStartingPrice(price.startingPrice, price.currency, "tr")}</strong>
                        </span>
                      )}
                      <Link className="text-link" href={solutionRoutes[item.id]}>
                        {cityPageCopy.solutionLink}
                        <span className="visually-hidden">: {solutions.items[item.id].name}</span>
                        <Arrow />
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      case "work":
        return (
          <section key={i} className="case-section wrap city-work" aria-labelledby={id}>
            <div className="case-section-head">
              <h2 id={id}>{b.heading}</h2>
            </div>
            <div className="case-section-body">
              <p className="case-text">{b.intro}</p>
            </div>
            <ul className="city-work-list">
              {b.projects.map(({ id: pid, note }) => {
                const project = getProject(pid)!;
                const copy = getProjectCopy("tr", pid);
                const name = copy.name ?? project.name;
                const story = getCaseStudy("tr", pid);
                return (
                  <li key={pid}>
                    <div className={`city-work-media scene-${project.scene}`}>
                      {project.media && (
                        <Image
                          src={project.media.src}
                          alt={copy.alt ?? name}
                          fill
                          sizes="(max-width: 767px) 92vw, 300px"
                          style={{ objectFit: project.media.frame === "phone" ? "contain" : "cover" }}
                        />
                      )}
                    </div>
                    <div>
                      <p className="eyebrow">{copy.industry}</p>
                      <h3>{name}</h3>
                      <p>{note}</p>
                      {story ? (
                        <Link className="text-link" href={{ pathname: "/work/[slug]", params: { slug: pid } }}>
                          {cityPageCopy.caseStudy}
                          <span className="visually-hidden">: {name}</span>
                          <Arrow />
                        </Link>
                      ) : (
                        <Link className="text-link" href={{ pathname: "/work", hash: pid }}>
                          {cityPageCopy.allWork}
                          <span className="visually-hidden">: {name}</span>
                          <Arrow />
                        </Link>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      case "faq":
        return (
          <section key={i} className="case-section wrap city-faq" aria-labelledby={id}>
            <div className="case-section-head">
              <h2 id={id}>{b.heading}</h2>
            </div>
            <div className="faq-list">
              {b.items.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        );
    }
  };

  return (
    <article className="city-page" data-city={city.id}>
      <header className="case-hero wrap city-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">{c.nav.home}</Link>
            </li>
            <li>
              <Link href="/service-areas">{cityPageCopy.breadcrumb}</Link>
            </li>
            <li aria-current="page">{city.name}</li>
          </ol>
        </nav>
        <p className="eyebrow">
          <span className="live-dot" aria-hidden="true" />
          {city.eyebrow}
        </p>
        <h1>{city.title}</h1>
        <p className="case-lead">{city.lead}</p>
        <div className="solution-hero-actions">
          <Link className="button" href={{ pathname: "/contact", query: { type: briefType } }}>
            {cityPageCopy.ctaPrimary}
            <Arrow />
          </Link>
          <a className="text-link" href={whatsappInquiry(city.cta.whatsapp)} target="_blank" rel="noopener noreferrer">
            {cityPageCopy.ctaSecondary}
            <Arrow diagonal />
          </a>
        </div>
        <figure className={`city-figure city-figure-${city.hero.kind}`}>
          <div className="city-figure-frame">
            {heroExists(city) && (
              <Image
                src={city.hero.src}
                alt={city.hero.alt}
                fill
                priority
                sizes="(max-width: 1100px) 92vw, 640px"
                style={{ objectFit: "cover", objectPosition: city.hero.focus }}
              />
            )}
          </div>
          <figcaption>
            {city.hero.kind === "photo" ? `${cityPageCopy.photo} · ${city.hero.caption}` : `${city.hero.caption} ${cityPageCopy.illustration}`}
          </figcaption>
        </figure>
      </header>

      {city.blocks.map(block)}

      <section className="case-cta" aria-labelledby="city-cta">
        <div className="wrap">
          <h2 id="city-cta">{city.cta.title}</h2>
          <p>{city.cta.text}</p>
          <div className="case-cta-actions">
            <Link className="button" href={{ pathname: "/contact", query: { type: briefType } }}>
              {cityPageCopy.ctaPrimary}
              <Arrow />
            </Link>
            <a className="text-link" href={whatsappInquiry(city.cta.whatsapp)} target="_blank" rel="noopener noreferrer">
              {cityPageCopy.ctaSecondary}
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      <footer className="wrap city-footer">
        <section aria-labelledby="city-sources">
          <h2 id="city-sources">{cityPageCopy.sources}</h2>
          <p>{cityPageCopy.sourcesNote}</p>
          <ul>
            {city.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <nav aria-labelledby="city-others">
          <h2 id="city-others">{cityPageCopy.otherCities}</h2>
          <ul>
            {neighbours.map((other) => (
              <li key={other.id}>
                <Link href={{ pathname: "/[area]", params: { area: citySlug(other.id) } }}>{other.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas">
                {serviceAreasCopy.label}
                <Arrow />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </article>
  );
}
