"use client";

import { useState } from "react";
import Image from "next/image";
import { Home, Puzzle, Folder, Info, Mail, type LucideIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/config/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navItems = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

const navIcons: Record<(typeof navItems)[number]["key"], LucideIcon> = {
  home: Home,
  services: Puzzle,
  projects: Folder,
  about: Info,
  contact: Mail,
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale() as "tr" | "en";
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const tHero = useTranslations("hero");
  const pathname = usePathname();
  const whatsappUrl = buildWhatsAppUrl(undefined, locale);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] shadow-navbar backdrop-blur-[10px]"
      style={{ background: "rgba(15,23,42,0.72)" }}
    >
      <div className="container-custom flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 text-lg font-semibold text-[#F1F5F9] hover:text-white transition"
        >
          <Image
            src="/img/mk-logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          {tCommon("brandName")}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ href, key }) => {
            const isHome = href === "/";
            const active = isHome ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition ${
                  active
                    ? "text-[#F1F5F9] font-medium underline decoration-accent decoration-2 underline-offset-4"
                    : "text-[#C5CDD9] hover:text-[#F1F5F9]"
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-4 shrink-0 md:ml-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium text-sm shadow-lg hover:shadow-[0_4px_20px_rgba(34,197,94,0.35)] hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {tHero("ctaQuote")}
          </a>
          <LanguageSwitcher />

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen((o) => !o);
            }}
            className="flex h-10 min-h-[44px] w-10 min-w-[44px] touch-manipulation items-center justify-center rounded-md text-[#F1F5F9] hover:bg-white/10 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? tCommon("closeMenu") : tCommon("openMenu")}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer: overlay + right panel (not full width) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden" aria-hidden={!mobileMenuOpen}>
          {/* Overlay: full screen, blur, close on click */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label={tCommon("closeMenu")}
          />
          {/* Drawer panel: right side, limited width */}
          <div
            className="absolute right-0 top-0 h-full w-[85vw] max-w-[320px] border-l border-white/10 bg-[#111827] p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-white/40">
                {locale === "tr" ? "MENÜ" : "MENU"}
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-md text-white/80 transition-all hover:bg-white/10"
                aria-label={tCommon("closeMenu")}
              >
                <span aria-hidden>✕</span>
              </button>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-md">
              <ul className="flex flex-col gap-2">
                {navItems.map(({ href, key }) => {
                  const isHome = href === "/";
                  const active = isHome ? pathname === "/" : pathname.startsWith(href);
                  const Icon = navIcons[key];
                  return (
                    <li key={href} className="flex justify-end">
                      <Link
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="inline-flex items-center justify-end"
                      >
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold text-white transition-all duration-200 ${
                            active
                              ? "border-white/20 bg-[#0b1220]"
                              : "border-white/15 bg-[#0b1220]/95 hover:bg-[#0b1220]"
                          }`}
                        >
                          {Icon && <Icon size={16} strokeWidth={2} className="shrink-0" />}
                          {t(key)}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
