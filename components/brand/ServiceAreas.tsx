import { Link } from "@/config/navigation";
import { citySlug, serviceAreasCopy, type CityPage } from "@/content/cities";
import { cityRegions } from "@/content/cities/types";
import { PageIntro } from "./PageIntro";
import { Arrow } from "./Arrow";

/** /tr/hizmet-bolgeleri: the ready city pages grouped by region. */
export function ServiceAreas({ cities }: { cities: CityPage[] }) {
  return (
    <>
      <PageIntro label={serviceAreasCopy.label} title={serviceAreasCopy.title} description={serviceAreasCopy.description} />
      <section className="section wrap service-areas" aria-labelledby="service-areas-list">
        <h2 id="service-areas-list" className="story-label">
          {serviceAreasCopy.listTitle}
        </h2>
        {cityRegions.map((region) => {
          const group = cities.filter((city) => city.region === region);
          if (!group.length) return null;
          return (
            <div key={region} className="service-area-group">
              <h3>{serviceAreasCopy.regions[region]}</h3>
              <ul>
                {group.map((city) => (
                  <li key={city.id}>
                    <Link href={{ pathname: "/[area]", params: { area: citySlug(city.id) } }}>
                      <span className="service-area-name">
                        {city.name}
                        <Arrow />
                      </span>
                      <span className="service-area-summary">{city.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
      <section className="section wrap service-areas-missing" aria-labelledby="service-areas-missing">
        <h2 id="service-areas-missing">{serviceAreasCopy.missing.title}</h2>
        <div>
          <p className="section-description">{serviceAreasCopy.missing.text}</p>
          <Link className="text-link" href={{ pathname: "/contact", query: { type: "unsure" } }}>
            İhtiyacınızı anlatın
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
