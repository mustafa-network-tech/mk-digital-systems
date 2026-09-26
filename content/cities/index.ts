import { existsSync } from "node:fs";
import path from "node:path";
import { cityIds, type CityId, type CityPage, type CityRegion } from "./types";
import { bolu } from "./bolu";
import { duzce } from "./duzce";
import { sakarya } from "./sakarya";
import { bartin } from "./bartin";
import { kilis } from "./kilis";
import { osmaniye } from "./osmaniye";
import { karaman } from "./karaman";
import { yozgat } from "./yozgat";
import { yalova } from "./yalova";
import { bilecik } from "./bilecik";
import { kocaeli } from "./kocaeli";
import { tekirdag } from "./tekirdag";
import { canakkale } from "./canakkale";
import { bursa } from "./bursa";
import { nevsehir } from "./nevsehir";
import { eskisehir } from "./eskisehir";
import { edirne } from "./edirne";
import { zonguldak } from "./zonguldak";

export { cityIds, type CityId, type CityPage };

/** Every city id has a page record: a missing one is a type error. */
const pages: Record<CityId, CityPage> = {
  bolu,
  duzce,
  sakarya,
  bartin,
  kilis,
  osmaniye,
  karaman,
  yozgat,
  yalova,
  bilecik,
  kocaeli,
  tekirdag,
  canakkale,
  bursa,
  nevsehir,
  eskisehir,
  edirne,
  zonguldak,
};

/** City pages are Turkish only: no locale alternates, no translated slugs. */
export const cityLocale = "tr" as const;

export function citySlug(id: CityId) {
  return `${id}-web-tasarim`;
}
/** True when the city's hero image is in public/ (checked at build time). */
export function heroExists(city: CityPage): boolean {
  return existsSync(path.join(process.cwd(), "public", city.hero.src));
}
/**
 * Local review only: CITY_PREVIEW=1 renders pages whose hero is not added yet, with an
 * empty frame. Never in an indexable (production) build.
 */
const preview = process.env.CITY_PREVIEW === "1" && process.env.VERCEL_ENV !== "production";
/** Published cities: written, marked ready and with their hero image in place. */
export function readyCities(): CityPage[] {
  return cityIds.map((id) => pages[id]).filter((page) => page.ready && (heroExists(page) || preview));
}
export function getCity(id: CityId): CityPage {
  return pages[id];
}
/**
 * A written city by slug without the hero check, for the OG card route: at request time
 * public/ is not reliably on disk in a serverless function. Pages link only published cards.
 */
export function writtenCityBySlug(slug: string): CityPage | undefined {
  return cityIds.map((id) => pages[id]).find((page) => page.ready && citySlug(page.id) === slug);
}
/** The index exists only once at least one city page is published. */
export function hasServiceAreas(): boolean {
  return readyCities().length > 0;
}
/** The ready city behind a public slug, e.g. "bolu-web-tasarim". */
export function cityBySlug(slug: string): CityPage | undefined {
  return readyCities().find((page) => citySlug(page.id) === slug);
}

/* ---------- Shared labels (TR) ---------- */

export const serviceAreasCopy = {
  meta: {
    title: "Hizmet Bölgeleri: Şehirlere Göre Web ve Yazılım | MK Digital Systems",
    description:
      "Bolu'dan Kilis'e, Edirne'den Nevşehir'e: her şehrin iş yapısına göre web tasarım, özel yazılım, işletme yönetim sistemi ve mobil uygulama sayfaları.",
  },
  label: "Hizmet bölgeleri",
  title: "Her şehrin işi başka, dijital ihtiyacı da.",
  description:
    "Bu sayfalar şehirlerin ekonomisini, iş yapısını ve oradaki işletmelerin dijital ihtiyaçlarını anlatır. Şehirlerde ofisimiz yok; projeleri çevrim içi görüşmelerle, telefonla ve WhatsApp üzerinden yürütüyoruz. Hangi şehirde olursanız olun süreç aynı özenle ilerler.",
  listTitle: "Şehirler",
  regions: {
    marmara: "Marmara",
    karadeniz: "Karadeniz",
    "ic-anadolu": "İç Anadolu",
    guney: "Akdeniz ve Güneydoğu",
  } satisfies Record<CityRegion, string>,
  read: "Şehir sayfası",
  missing: {
    title: "Şehriniz listede yok mu?",
    text: "Liste, sayfasını hazırladığımız şehirlerden oluşur; çalıştığımız yerlerin sınırı değildir. Türkiye'nin her yerinden işletmelerle aynı yöntemle çalışıyoruz.",
  },
} as const;

export const cityPageCopy = {
  breadcrumb: "Hizmet bölgeleri",
  photo: "Fotoğraf: Mavi Kadraj arşivi",
  illustration: "Temsili illüstrasyon; gerçek bir fotoğraf değildir.",
  ctaPrimary: "İhtiyacınızı anlatın",
  ctaSecondary: "WhatsApp'tan yazın",
  solutionLink: "Çözümü inceleyin",
  startingPrice: "Başlangıç fiyatı",
  caseStudy: "Proje hikâyesini okuyun",
  allWork: "Çalışmalarda görün",
  sources: "Şehir bilgilerinin kaynakları",
  sourcesNote:
    "Şehirle ilgili bilgiler aşağıdaki resmî ve kurumsal kaynaklardan derlendi; projeler şehirden bağımsız, yetenek örneği olarak gösterilir.",
  otherCities: "Diğer hizmet bölgeleri",
} as const;
