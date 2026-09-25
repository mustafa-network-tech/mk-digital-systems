import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content/site";
import { getProject } from "@/content/projects";
import { validLocale, pageMetadata, pageSchema } from "@/lib/seo";
import { contactConfig } from "@/lib/contact-config";
import { JsonLd } from "@/components/brand/JsonLd";
import { PageIntro } from "@/components/brand/PageIntro";
import { ProjectBrief } from "@/components/brand/ProjectBrief";
import { Arrow } from "@/components/brand/Arrow";
type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string; project?: string }>;
};
export async function generateMetadata({ params }: Props) {
  return pageMetadata(validLocale((await params).locale), "contact");
}
export default async function Contact({ params, searchParams }: Props) {
  const locale = validLocale((await params).locale);
  setRequestLocale(locale);
  const c = getContent(locale);
  const query = await searchParams;
  const project = query.project && getProject(query.project)
    ? query.project
    : undefined;
  return (
    <div className="contact-page">
      <JsonLd data={pageSchema(locale, "contact")} />
      <PageIntro
        label={c.contact.label}
        title={c.contact.title}
        description={c.contact.description}
      />
      <div className="contact-layout wrap">
        <ProjectBrief
          locale={locale}
          copy={c.contact}
          initialType={query.type}
          project={project}
        />
        <aside className="contact-aside">
          <h2>{c.contact.direct}</h2>
          <div className="contact-channels">
            <a href={contactConfig.phoneHref}>
              <div>
                <span>{c.contact.call}</span>
                <small>{contactConfig.phoneDisplay}</small>
              </div>
              <Arrow diagonal />
            </a>
            <a href={contactConfig.emailHref}>
              <div>
                <span>{c.contact.emailUs}</span>
                <small>{contactConfig.email}</small>
              </div>
              <Arrow diagonal />
            </a>
            <a
              href={contactConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{c.contact.whatsapp}</span>
              <Arrow diagonal />
            </a>
          </div>
          <div className="contact-note">
            <h2 className="next-heading">{c.contact.next}</h2>
            <p>{c.contact.nextText}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
