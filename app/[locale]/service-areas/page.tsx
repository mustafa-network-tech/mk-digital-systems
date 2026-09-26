import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { cityLocale, hasServiceAreas, readyCities } from "@/content/cities";
import { serviceAreasMetadata, serviceAreasSchema } from "@/lib/seo";
import { JsonLd } from "@/components/brand/JsonLd";
import { ServiceAreas } from "@/components/brand/ServiceAreas";

type Props = { params: Promise<{ locale: string }> };

// Turkish only: /tr/hizmet-bolgeleri. /en|de|fr/service-areas are 404s, and so is the
// index itself until a city page is published.
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: cityLocale }];
}
async function resolve(params: Props["params"]) {
  if ((await params).locale !== cityLocale || !hasServiceAreas()) notFound();
}
export async function generateMetadata({ params }: Props) {
  await resolve(params);
  return serviceAreasMetadata();
}
export default async function ServiceAreasRoute({ params }: Props) {
  await resolve(params);
  setRequestLocale(cityLocale);
  const cities = readyCities();
  return (
    <>
      <JsonLd data={serviceAreasSchema(cities)} />
      <ServiceAreas cities={cities} />
    </>
  );
}
