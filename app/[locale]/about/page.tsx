import { permanentRedirect } from "next/navigation";
import { validLocale } from "@/lib/seo";
export default async function LegacyAbout({ params }: { params: Promise<{ locale: string }> }) { permanentRedirect(`/${validLocale((await params).locale)}`); }
