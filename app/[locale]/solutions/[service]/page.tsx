import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content/site";
import { solutionBySlug, solutionIds, solutionLocales, solutionSlug } from "@/content/solutions";
import { solutionMetadata, solutionSchema, validLocale } from "@/lib/seo";
import { JsonLd } from "@/components/brand/JsonLd";
import { SolutionPage } from "@/components/brand/SolutionPage";

type Props = { params: Promise<{ locale: string; service: string }> };

// Internal slugs are the English ones; config/i18n pathnames maps each to its localized URL.
// Any other slug is a 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return solutionLocales().flatMap((locale) => solutionIds.map((id) => ({ locale, service: solutionSlug(id) })));
}
function resolve(locale: string, service: string) {
  const l = validLocale(locale);
  const id = solutionBySlug(service);
  if (!id) notFound();
  return { locale: l, id };
}
export async function generateMetadata({ params }: Props) {
  const { locale, service } = await params;
  const { locale: l, id } = resolve(locale, service);
  return solutionMetadata(l, id);
}
export default async function SolutionRoute({ params }: Props) {
  const { locale: raw, service } = await params;
  const { locale, id } = resolve(raw, service);
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={solutionSchema(locale, id)} />
      <SolutionPage id={id} locale={locale} c={getContent(locale)} />
    </>
  );
}
