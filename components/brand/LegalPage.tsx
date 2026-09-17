import type { SiteContent } from "@/content/site";
import { CONTACT_EMAIL } from "@/lib/constants";
import { PageIntro } from "./PageIntro";
export function LegalPage({
  copy,
  kind,
}: {
  copy: SiteContent;
  kind: "privacy" | "terms";
}) {
  const sections =
    kind === "privacy" ? copy.legal.privacySections : copy.legal.termsSections;
  return (
    <>
      <PageIntro
        label={copy.footer[kind]}
        title={
          kind === "privacy" ? copy.legal.privacyTitle : copy.legal.termsTitle
        }
        description={
          kind === "privacy" ? copy.legal.privacyIntro : copy.legal.termsIntro
        }
      />
      <div className="legal-content wrap">
        {sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
          </section>
        ))}
        <p>{copy.legal.updated}</p>
        <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </div>
    </>
  );
}
