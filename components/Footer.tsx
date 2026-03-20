"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/config/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale() as "tr" | "en";
  const whatsappUrl = buildWhatsAppUrl(t("ctaPrefill"), locale);

  return (
    <footer
      className="footer-brand relative z-10 shrink-0 min-h-[72px] w-full border-t border-[rgba(255,255,255,0.08)] shadow-[0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-[14px]"
      style={{ background: "rgba(15,23,42,0.42)" }}
    >
      <div className="container-custom pt-10 pb-10 md:pb-12">
        <div className="grid grid-cols-1 items-center gap-6 min-h-[52px] md:grid-cols-[1fr_auto_1fr] md:gap-4">
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="text-sm text-[#C5CDD9]">{t("copyright")}</p>
            <p className="footer-tagline mt-1.5 text-xs text-[#C5CDD9] opacity-[0.65]">
              {t("tagline")}
            </p>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <Image
              src="/img/mk-logo.png"
              alt="MK Digital Systems"
              width={180}
              height={60}
              className="h-12 w-auto object-contain md:h-14"
            />
          </div>
          <nav className="order-3 flex justify-center gap-6 text-sm md:justify-end" aria-label="Legal">
            <Link href="/legal/privacy" className="footer-legal-link">
              {t("privacy")}
            </Link>
            <Link href="/legal/terms" className="footer-legal-link">
              {t("terms")}
            </Link>
          </nav>
        </div>

        {/* CTA: footer içinde, telif / logo / yasal satırının altında */}
        <div className="mt-8 border-t border-white/[0.08] pt-8 text-center md:mt-10 md:pt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("ctaAria")}
            className="footer-cta-link inline-flex max-w-[min(100%,36rem)] flex-wrap items-center justify-center gap-x-2 gap-y-1 text-balance text-sm leading-relaxed text-[#C5CDD9] underline-offset-[5px] decoration-[#C5CDD9]/0 transition-colors hover:underline hover:decoration-[#C5CDD9]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(15,23,42,0.9)]"
          >
            <svg
              className="h-4 w-4 shrink-0 opacity-70"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>{t("cta")}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
