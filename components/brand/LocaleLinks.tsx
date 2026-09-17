"use client";
import { Link, usePathname } from "@/config/navigation";
import { locales, type Locale } from "@/config/i18n";
export function LocaleLinks({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return (
    <div className="footer-languages">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathname || "/"}
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
