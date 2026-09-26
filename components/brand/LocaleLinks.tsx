"use client";
import { Link } from "@/config/navigation";
import { useLocaleHref } from "./useLocaleHref";
import { locales, type Locale } from "@/config/i18n";
export function LocaleLinks({ locale }: { locale: Locale }) {
  const href = useLocaleHref();
  return (
    <div className="footer-languages">
      {locales.map((l) => (
        <Link
          key={l}
          href={href(l)}
          locale={l}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
