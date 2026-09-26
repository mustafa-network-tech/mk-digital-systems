import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content/site";
import { projectLayers, projectsByLayer } from "@/content/projects";
import { validLocale, pageMetadata, pageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/brand/JsonLd";
import { PageIntro } from "@/components/brand/PageIntro";
import { ProjectStory } from "@/components/brand/ProjectStory";
import { WorkCard } from "@/components/brand/WorkCard";
import { WorkIndex } from "@/components/brand/WorkIndex";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  return pageMetadata(validLocale((await params).locale), "work");
}
export default async function Work({ params }: Props) {
  const locale = validLocale((await params).locale);
  setRequestLocale(locale);
  const c = getContent(locale);
  const layers = projectLayers.map((id) => ({
    id,
    ...c.work.layers[id],
    projects: projectsByLayer(id),
  }));
  return (
    <>
      <JsonLd data={pageSchema(locale, "work")} />
      <PageIntro
        label={c.work.pageLabel}
        title={c.work.title}
        description={c.work.description}
      />
      <div className="work-page wrap">
        <WorkIndex
          label={c.work.filter}
          allLabel={c.work.allLabel}
          layers={layers.map(({ id, label, projects }) => ({
            id,
            label,
            count: projects.length,
          }))}
        >
          {layers.map((layer) => (
            <section
              key={layer.id}
              className="work-layer"
              data-layer={layer.id}
              aria-labelledby={`layer-${layer.id}`}
            >
              <div className="work-layer-head">
                <h2 id={`layer-${layer.id}`}>{layer.title}</h2>
                <p className="section-description">{layer.description}</p>
              </div>
              {layer.id === "flagship" ? (
                <div className="stories-list">
                  {layer.projects.map((p, i) => (
                    <ProjectStory
                      key={p.id}
                      project={p}
                      copy={c.work}
                      locale={locale}
                      full
                      index={i}
                    />
                  ))}
                </div>
              ) : (
                <div className="work-grid">
                  {layer.projects.map((p) => (
                    <WorkCard key={p.id} project={p} copy={c.work} locale={locale} />
                  ))}
                </div>
              )}
            </section>
          ))}
        </WorkIndex>
      </div>
    </>
  );
}
