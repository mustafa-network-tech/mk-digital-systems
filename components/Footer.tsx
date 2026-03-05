"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/config/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="footer-brand relative z-10 shrink-0 min-h-[72px] w-full border-t border-[rgba(255,255,255,0.08)] py-10 shadow-[0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-[10px]"
      style={{ background: "rgba(15,23,42,0.72)" }}
    >
      <div className="container-custom grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center min-h-[52px]">
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-sm text-[#C5CDD9]">{t("copyright")}</p>
          <p className="footer-tagline mt-1.5 text-xs text-[#C5CDD9] opacity-[0.65]">
            {t("tagline")}
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/img/mk-logo.png"
            alt="MK Digital Systems"
            width={180}
            height={60}
            className="h-12 w-auto md:h-14 object-contain"
          />
        </div>
        <nav className="flex gap-6 text-sm justify-center md:justify-end order-3" aria-label="Legal">
          <Link href="/legal/privacy" className="footer-legal-link">
            {t("privacy")}
          </Link>
          <Link href="/legal/terms" className="footer-legal-link">
            {t("terms")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
