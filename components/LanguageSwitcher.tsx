"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/config/navigation";
import { locales, type Locale } from "@/config/i18n";
import { useRef, useEffect, useState } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("localeSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const localeCodes: Record<Locale, string> = {
    tr: "TR",
    en: "EN",
  };

  const handleChange = (next: Locale) => {
    if (next === locale) {
      setOpen(false);
      return;
    }
    router.replace(pathname, { locale: next });
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const delay = typeof window !== "undefined" && "ontouchstart" in window ? 150 : 0;
    const id = window.setTimeout(() => {
      document.addEventListener("click", handleClickOutside as (e: MouseEvent) => void);
      document.addEventListener("touchend", handleClickOutside);
    }, delay);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener("click", handleClickOutside as (e: MouseEvent) => void);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className="flex h-10 min-h-[44px] w-10 min-w-[44px] touch-manipulation items-center justify-center rounded-xl text-xl text-white/80 transition-all duration-150 ease-out bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/[0.08] hover:border-white/15 hover:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(15,23,42,0.72)] cursor-pointer"
        aria-label={t("ariaLabel")}
        aria-expanded={open}
        aria-haspopup="true"
      >
        🌐
      </button>

      <div
        className={`absolute right-0 top-full z-[200] mt-2 w-44 rounded-xl border border-white/10 bg-[#0B1220]/75 backdrop-blur-xl p-2 shadow-2xl transition-all duration-150 ease-out origin-top-right ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-[0.98] pointer-events-none"
        }`}
        role="menu"
        aria-hidden={!open}
      >
        {locales.map((l) => {
          const isSelected = l === locale;
          return (
            <button
              key={l}
              type="button"
              role="menuitem"
              onClick={() => handleChange(l)}
              className={`w-full flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-150 ease-out cursor-pointer ${
                isSelected
                  ? "bg-blue-500/15 border border-blue-400/20 text-blue-200"
                  : "text-white/80 hover:bg-white/6 hover:text-white border border-transparent"
              }`}
            >
              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden />}
              <span className={isSelected ? "font-medium text-blue-200" : "text-white/80"}>{localeCodes[l]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
