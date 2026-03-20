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

        {/* Mobil/tablet: dikey; masaüstü (lg+): sol görsel, sağ 2×2 */}
        <div className="mt-8 flex min-w-0 flex-col gap-8 lg:mt-10 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-12">
          {/* Görsel: masaüstünde lg+ padding ile biraz içeri çekilir (kenarlardan nefes); <lg düzeni aynı */}
          <div className="min-w-0 w-full shrink-0 px-2 sm:px-4 md:mx-auto md:max-w-[min(100%,52rem)] md:px-3 lg:mx-0 lg:w-[46%] lg:max-w-xl lg:px-4 lg:py-2 xl:max-w-2xl xl:px-5 xl:py-3">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f172a] shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:aspect-[4/3] md:aspect-[16/9] md:min-h-[min(320px,42vh)] md:max-h-[min(480px,55vh)] lg:aspect-auto lg:min-h-[min(440px,56vh)] lg:max-h-[min(520px,62vh)]">
              <Image
                src="/images/mk.jpg"
                alt=""
                fill
                sizes="(max-width: 1023px) min(100vw, 52rem), 40vw"
                className="object-contain object-center lg:object-cover lg:object-[52%_center]"
                priority={false}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/25 via-transparent to-transparent lg:from-[#0B0F14]/35 lg:to-[#0B0F14]/10"
                aria-hidden
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-rows-2 lg:gap-4">
              {items.map((s) => (
                <Link
                  key={s.id}
                  href={`/services#${s.id}`}
                  className="service-card-glow service-card-glow--home-preview flex min-h-0 flex-col rounded-[14px] border border-white/[0.07] bg-[#111827]/95 p-4 text-[#E6EAF0] no-underline backdrop-blur-[2px] transition-colors hover:border-white/[0.12] hover:bg-[#141B2D] sm:p-5"
                >
                  <div className="service-card-content flex min-h-0 flex-1 flex-col">
                    <span
                      className="service-card-icon mb-1.5 block shrink-0 opacity-[0.88] sm:mb-2"
                      style={{ fontSize: "19px", color: s.iconColor }}
                      aria-hidden
                    >
                      {s.icon}
                    </span>
                    <h3 className="service-card-title mb-1.5 text-[0.95rem] font-semibold leading-snug sm:mb-2 sm:text-base md:text-[1.05rem]">
                      {isTr ? s.titleTr : s.titleEn}
                    </h3>
                    <p className="mb-2 line-clamp-2 max-w-none text-[0.8125rem] leading-relaxed text-[#B9C4D4] sm:line-clamp-3 sm:text-sm lg:line-clamp-none lg:text-sm">
                      {isTr ? s.descTr : s.descEn}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1 pt-1 sm:gap-1.5">
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
