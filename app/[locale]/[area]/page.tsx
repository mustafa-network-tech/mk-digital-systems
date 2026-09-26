import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { cityBySlug, cityLocale, citySlug, readyCities } from "@/content/cities";
import { cityMetadata, citySchema } from "@/lib/seo";
import { JsonLd } from "@/components/brand/JsonLd";
import { CityPageView } from "@/components/brand/CityPage";

type Props = { params: Promise<{ locale: string; area: string }> };

// Turkish city pages only (/tr/{city}-web-tasarim). Every other locale or slug is a 404;
// static routes (/cozumler, /calismalar, ...) always win over this segment.
export const dynamicParams = false;
export function generateStaticParams() {
  return readyCities().map((city) => ({ locale: cityLocale, area: citySlug(city.id) }));
}
function resolve(locale: string, area: string) {
  const city = locale === cityLocale ? cityBySlug(area) : undefined;
  if (!city) notFound();
  return city;
}
export async function generateMetadata({ params }: Props) {
  const { locale, area } = await params;
  return cityMetadata(resolve(locale, area));
}
export default async function CityRoute({ params }: Props) {
  const { locale, area } = await params;
  const city = resolve(locale, area);
  setRequestLocale(cityLocale);
  return (
    <>
      <JsonLd data={citySchema(city)} />
      <CityPageView city={city} />
    </>
  );
}
