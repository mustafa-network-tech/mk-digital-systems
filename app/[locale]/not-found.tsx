import { getLocale } from "next-intl/server";
import { getContent } from "@/content/site";
import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
export default async function NotFound() { const c = getContent(await getLocale() as Locale); return <section className="page-intro wrap"><p className="eyebrow">404</p><h1>{c.notFound.title}</h1><p className="intro-description">{c.notFound.description}</p><Link className="button" href="/" style={{ marginTop: 30 }}>{c.notFound.back} →</Link></section>; }
