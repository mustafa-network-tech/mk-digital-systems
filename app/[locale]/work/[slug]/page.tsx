import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/config/i18n";
import { getContent } from "@/content/site";
import type { ProjectId } from "@/content/projects";
import { caseStudyIds, caseStudyLocales, getCaseStudy } from "@/content/case-studies";
import { caseStudyMetadata, caseStudySchema, validLocale } from "@/lib/seo";
import { JsonLd } from "@/components/brand/JsonLd";
import { CaseStudy } from "@/components/brand/CaseStudy";

type Props = { params: Promise<{ locale: string; slug: string }> };

// Only written case studies exist; any other slug is a 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    caseStudyIds.filter((id) => caseStudyLocales(id).includes(locale)).map((slug) => ({ locale, slug })),
  );
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const l = validLocale(locale);
  if (!getCaseStudy(l, slug)) notFound();
  return caseStudyMetadata(l, slug as ProjectId);
}
export default async function CaseStudyPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale = validLocale(raw);
  setRequestLocale(locale);
  if (!getCaseStudy(locale, slug)) notFound();
  const id = slug as ProjectId;
  return (
    <>
      <JsonLd data={caseStudySchema(locale, id)} />
      <CaseStudy id={id} locale={locale} c={getContent(locale)} />
    </>
  );
}
