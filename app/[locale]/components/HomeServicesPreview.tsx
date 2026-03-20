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
      <div className="container-custom relative">
        <h2 className="text-section font-semibold tracking-tight text-[#E6EAF0]">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#9CA3AF] md:text-base md:leading-relaxed">
          {subtitle}
        </p>

        {/*
          Mobil: görsel üstte + 2×2 kart.
          lg+: flex — sol uzun görsel (yükseklik kart satırına kilitli değil, ~önceki 2× yükseklik hedefi),
          sağda dar + sıkı (kısa) kartlar.
        */}
        <div className="mt-8 flex w-full max-w-full min-w-0 flex-col gap-8 overflow-x-clip lg:mt-10 lg:flex-row lg:items-start lg:gap-6 xl:gap-8">
          <div className="min-w-0 px-2 sm:px-4 md:mx-auto md:max-w-[min(100%,52rem)] md:px-3 lg:mx-0 lg:w-[min(56%,640px)] lg:flex-shrink-0 lg:px-0 xl:w-[min(58%,680px)]">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-full overflow-hidden rounded-2xl bg-[#0B0F14]/50 sm:aspect-[4/3] md:aspect-[16/9] md:min-h-[min(320px,42vh)] md:max-h-[min(480px,55vh)] lg:mx-0 lg:aspect-auto lg:min-h-[min(760px,82vh)] lg:max-h-[min(920px,90vh)] lg:w-full lg:rounded-3xl lg:bg-transparent lg:shadow-[0_32px_90px_rgba(0,0,0,0.22)]">
              <Image
                src="/images/mk.jpg"
                alt=""
                fill
                sizes="(max-width: 1023px) min(100vw, 52rem), 56vw"
                className="object-contain object-center lg:object-cover lg:object-[50%_40%]"
                priority={false}
              />
            </div>
          </div>

          <div className="min-w-0 w-full lg:max-w-[380px] lg:flex-1 xl:max-w-[400px]">
            <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-3 lg:gap-2.5 xl:gap-3">
              {items.map((s) => (
                <Link
                  key={s.id}
                  href={`/services#${s.id}`}
                  className="service-card-glow service-card-glow--home-preview flex min-h-0 min-w-0 flex-col rounded-[12px] border border-white/[0.07] bg-[#111827]/95 p-3 no-underline backdrop-blur-[2px] transition-colors hover:border-white/[0.12] hover:bg-[#141B2D] sm:p-4 lg:p-3 lg:py-2.5"
                >
                  <div className="service-card-content flex min-h-0 min-w-0 flex-1 flex-col">
                    <span
                      className="service-card-icon mb-1 block shrink-0 opacity-[0.88] sm:mb-1.5"
                      style={{ fontSize: "17px", color: s.iconColor }}
                      aria-hidden
                    >
                      {s.icon}
                    </span>
                    <h3 className="service-card-title service-card-title--home-preview mb-1 text-[0.875rem] font-semibold leading-snug sm:mb-1.5 sm:text-[0.95rem] lg:line-clamp-2 lg:text-[0.82rem] lg:leading-tight xl:text-[0.85rem]">
                      {isTr ? s.titleTr : s.titleEn}
                    </h3>
                    <p className="mb-1 line-clamp-2 max-w-none text-[0.75rem] leading-snug text-[#B9C4D4] sm:line-clamp-2 sm:text-[0.8rem] lg:mb-0 lg:line-clamp-2 lg:text-[0.72rem]">
                      {isTr ? s.descTr : s.descEn}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-0.5 pt-1 sm:gap-1 lg:pt-0.5">
                      {s.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="service-card-tag sm:hidden">
                          {tag}
                        </span>
                      ))}
                      {s.tags.map((tag) => (
                        <span key={tag} className="service-card-tag hidden text-[0.6rem] sm:inline-flex lg:py-0">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
