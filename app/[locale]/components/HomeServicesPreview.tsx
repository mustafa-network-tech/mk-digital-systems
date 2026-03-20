import Image from "next/image";
import { Link } from "@/config/navigation";
import { services } from "@/lib/services";

export type HomePreviewService = (typeof services)[number];

type Props = {
  title: string;
  subtitle: string;
  /** messages: `services.viewAllLink` (metin ve ok birlikte) — `/services` */
  viewAllLink: string;
  isTr: boolean;
  items: HomePreviewService[];
};

/**
 * Ana sayfa: çözüm alanları önizlemesi — görsel + 4 kart (2×2), mobilde görsel üstte.
 * Tam liste `/services` sayfasında; burada sadece vitrin.
 */
export function HomeServicesPreview({ title, subtitle, viewAllLink, isTr, items }: Props) {
  return (
    <section
      id="services"
      className="section-spacing relative z-[1] overflow-x-clip border-t border-white/[0.05] bg-[#0B0F14]/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
    >
      {/* lg+: site container’dan biraz daha geniş max-width + daha az yatay padding (içerik nefes alır) */}
      <div className="container-custom relative lg:max-w-[min(100%,1420px)] lg:px-5 xl:max-w-[min(100%,1500px)] xl:px-6 2xl:max-w-[min(100%,1540px)] 2xl:px-8">
        <h2 className="text-section font-semibold tracking-tight text-[#E6EAF0]">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#9CA3AF] md:text-base md:leading-relaxed lg:max-w-3xl">
          {subtitle}
        </p>

        {/*
          Mobil/tablet: flex + üstte görsel (lg: grid yok).
          Masaüstü: 3 sütun grid — görsel col1 row-span-2; sağ iki sütun 2×2 kart (satır yükseklikleri kartlara göre; görsel aynı iki satıra yayılır).
        */}
        <div className="mt-8 flex w-full max-w-full min-w-0 flex-col gap-8 overflow-x-clip lg:mt-10 lg:grid lg:min-h-0 lg:min-w-0 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.49fr)_minmax(0,0.49fr)] lg:grid-rows-2 lg:items-stretch lg:gap-x-7 lg:gap-y-3 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.475fr)_minmax(0,0.475fr)] xl:gap-x-8 xl:gap-y-3.5">
          <div className="min-w-0 px-2 sm:px-4 md:mx-auto md:max-w-[min(100%,52rem)] md:px-3 lg:col-start-1 lg:row-span-2 lg:mx-0 lg:flex lg:min-h-0 lg:w-full lg:max-w-none lg:flex-col lg:self-stretch lg:overflow-hidden lg:px-0">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-full overflow-hidden rounded-2xl bg-[#0B0F14]/50 sm:aspect-[4/3] md:aspect-[16/9] md:min-h-[min(320px,42vh)] md:max-h-[min(480px,55vh)] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-0 lg:min-w-0 lg:w-full lg:flex-1 lg:rounded-md lg:border-0 lg:bg-[#0B0F14]/30 lg:shadow-none">
              <Image
                src="/images/mk.jpg"
                alt=""
                fill
                sizes="(max-width: 1023px) min(100vw, 52rem), (max-width: 1536px) 58vw, 720px"
                className="object-contain object-center lg:object-contain lg:object-center"
                priority={false}
              />
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:contents lg:gap-0">
            {items.map((s) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="service-card-glow service-card-glow--home-preview flex min-h-0 min-w-0 flex-col rounded-[14px] border border-white/[0.07] bg-[#111827]/95 p-4 no-underline backdrop-blur-[2px] transition-colors hover:border-white/[0.12] hover:bg-[#141B2D] sm:p-5 lg:min-h-0 lg:max-w-full lg:p-3 lg:py-2.5 xl:p-3.5"
              >
                <div className="service-card-content flex min-h-0 min-w-0 flex-1 flex-col">
                  <span
                    className="service-card-icon mb-1.5 block shrink-0 opacity-[0.88] sm:mb-2 lg:mb-1"
                    style={{ fontSize: "19px", color: s.iconColor }}
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                  <h3 className="service-card-title service-card-title--home-preview mb-1.5 text-[0.95rem] font-semibold leading-snug sm:mb-2 sm:text-base md:text-[1.05rem] lg:mb-1 lg:line-clamp-2 lg:text-[0.95rem] lg:leading-snug">
                    {isTr ? s.titleTr : s.titleEn}
                  </h3>
                  <p className="mb-2 line-clamp-2 max-w-none text-[0.8125rem] leading-relaxed text-[#B9C4D4] sm:line-clamp-3 sm:text-sm lg:mb-1.5 lg:line-clamp-2 lg:text-[0.8125rem] lg:leading-snug">
                    {isTr ? s.descTr : s.descEn}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1 pt-1 sm:gap-1.5 lg:gap-1 lg:pt-0.5">
                    {s.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="service-card-tag sm:hidden">
                        {tag}
                      </span>
                    ))}
                    {s.tags.map((tag) => (
                      <span key={tag} className="service-card-tag hidden sm:inline-flex">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 px-1 sm:mt-9 sm:px-0 lg:mt-10">
          <Link
            href="/services"
            className="inline-flex max-w-full items-center gap-1.5 text-sm font-medium text-[#60A5FA] transition duration-200 ease-out hover:text-[#93C5FD] hover:underline hover:underline-offset-4"
          >
            {viewAllLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
