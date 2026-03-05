"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

const EN_TOKENS_SHOULD_NOT_APPEAR_IN_TR = [
  "Premium",
  "minimalist",
  "minimal",
  "reliable",
  "trustworthy",
  "Back to",
  "View Projects",
  "All Services",
  "All Projects",
  "Get a Quote",
  "Get in touch",
  "Who we are",
  "How we work",
  "Scope-first",
  "Single point of contact",
  "No surprises",
  "Tools We Use",
  "Privacy",
  "Terms of Use",
  "Select language",
  "Message prepared",
  "DEMO",
];

const TR_TOKENS_SHOULD_NOT_APPEAR_IN_EN = [
  "Anasayfa",
  "Hizmetler",
  "Projeler",
  "Hakkımızda",
  "İletişim",
  "Teklif Al",
  "Tüm Hizmetler",
  "Tüm Projeler",
  "Projelere Dön",
  "Hizmetlere Dön",
  "Gizlilik",
  "Kullanım Şartları",
  "Dil seçimi",
  "Mesaj hazırlandı",
  "Örnek",
  "Kapat",
  "Gönder",
  "Ad Soyad",
  "E-posta",
  "Mesaj",
];

function findWrongLocaleTokens(text: string, tokens: string[]): string[] {
  const found: string[] = [];
  const normalized = text.replace(/\s+/g, " ").toLowerCase();
  for (const token of tokens) {
    if (normalized.includes(token.toLowerCase())) found.push(token);
  }
  return found;
}

export function LocaleGuard() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "tr";
  }, [locale]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const timer = setTimeout(() => {
      const main = document.querySelector("main");
      const text = main?.textContent ?? document.body?.textContent ?? "";

      if (locale === "tr") {
        const found = findWrongLocaleTokens(text, EN_TOKENS_SHOULD_NOT_APPEAR_IN_TR);
        if (found.length > 0) {
          console.error(
            "[LocaleGuard] TR sayfasında sadece Türkçe olmalı. Sayfada İngilizce token'lar bulundu:",
            found
          );
        }
      }

      if (locale === "en") {
        const found = findWrongLocaleTokens(text, TR_TOKENS_SHOULD_NOT_APPEAR_IN_EN);
        if (found.length > 0) {
          console.error(
            "[LocaleGuard] EN page should show only English. Found Turkish tokens on the page:",
            found
          );
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [locale]);

  return null;
}
