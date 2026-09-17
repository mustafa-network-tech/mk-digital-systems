import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content/site";
import { validLocale, pageMetadata, pageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/brand/JsonLd";
import { LegalPage } from "@/components/brand/LegalPage";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) { return pageMetadata(validLocale((await params).locale), "privacy"); }
export default async function Privacy({ params }: Props) { const locale = validLocale((await params).locale); setRequestLocale(locale); return <><JsonLd data={pageSchema(locale, "privacy")}/><LegalPage copy={getContent(locale)} kind="privacy"/></>; }
