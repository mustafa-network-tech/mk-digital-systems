import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content/site";
import { projectsByLayer } from "@/content/projects";
import { validLocale, pageMetadata, pageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/brand/JsonLd";
import { PageIntro } from "@/components/brand/PageIntro";
import { ProjectStory } from "@/components/brand/ProjectStory";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  return pageMetadata(validLocale((await params).locale), "work");
}
export default async function Work({ params }: Props) {
  const locale = validLocale((await params).locale);
  setRequestLocale(locale);
  const c = getContent(locale);
  return (
    <>
      <JsonLd data={pageSchema(locale, "work")} />
      <PageIntro
        label={c.work.label}
        title={c.work.title}
        description={c.work.description}
      />
      <section className="work-page wrap" aria-label={c.work.label}>
        <div className="stories-list">
          {projectsByLayer("flagship").map((p, i) => (
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
      </section>
    </>
  );
}
