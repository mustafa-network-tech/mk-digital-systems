"use client";
import { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "@/config/navigation";
import { useLocaleHref } from "./useLocaleHref";
import { locales, type Locale } from "@/config/i18n";
import type { SiteContent } from "@/content/site";
import { Brand } from "./Brand";
import { Arrow } from "./Arrow";
import { contactConfig } from "@/lib/contact-config";
const languageNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  fr: "Français",
};
export function Navigation({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteContent["nav"];
}) {
  const path = usePathname();
  const localeHref = useLocaleHref();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const selector = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setOpen(false);
    if (selector.current) selector.current.open = false;
  }, [path, locale]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer"),
    );
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => {
      element.inert = true;
    });
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key !== "Tab") return;
      const nodes = Array.from(
        panel.current?.querySelectorAll<HTMLElement>(
          'a,button,[tabindex="0"]',
        ) || [],
      );
      const first = nodes[0],
        last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 1000) setOpen(false);
    };
    document.addEventListener("keydown", trap);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      background.forEach((element, index) => {
        element.inert = previousInert[index];
      });
      document.removeEventListener("keydown", trap);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  useEffect(() => {
    const dismiss = (e: MouseEvent) => {
      if (selector.current && !selector.current.contains(e.target as Node))
        selector.current.open = false;
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selector.current?.open) {
        selector.current.open = false;
        selector.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("click", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("click", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  const links = (["solutions", "work", "contact"] as const).map((page) => (
    <Link
      key={page}
      href={`/${page}`}
      aria-current={path === `/${page}` ? "page" : undefined}
      onClick={() => setOpen(false)}
    >
      {copy[page]}
    </Link>
  ));
  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}
      id="top"
    >
      <div className="header-inner wrap">
        <Link
          href="/"
          aria-label={`MK Digital Systems — ${copy.home}`}
          className="home-brand"
        >
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label={copy.home}>
          {links}
        </nav>
        <div className="header-actions">
          <details ref={selector} className="language-menu">
            <summary aria-label={copy.language}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              {locale.toUpperCase()}
              <span aria-hidden="true">⌄</span>
            </summary>
            <div className="language-options">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={localeHref(l)}
                  locale={l}
                  hrefLang={l}
                  lang={l}
                  aria-current={l === locale ? "true" : undefined}
                  onClick={() => {
                    if (selector.current) selector.current.open = false;
                  }}
                >
                  {languageNames[l]}
                  <span>{l.toUpperCase()}</span>
                </Link>
              ))}
            </div>
          </details>
          <a
            href={contactConfig.whatsappHref}
            className="button button-small header-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.start}
            <Arrow diagonal />
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? copy.close : copy.open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      {open && (
        <div
          ref={panel}
          className="mobile-menu"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={copy.open}
        >
          <button
            className="mobile-menu-close"
            type="button"
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
          >
            {copy.close}
            <span aria-hidden="true">×</span>
          </button>
          <nav aria-label={copy.home}>{links}</nav>
          <div className="mobile-languages" aria-label={copy.language}>
            {locales.map((l) => (
              <Link
                key={l}
                href={localeHref(l)}
                locale={l}
                hrefLang={l}
                lang={l}
                aria-current={l === locale ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <a
            href={contactConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            onClick={() => setOpen(false)}
          >
            {copy.start}
            <Arrow diagonal />
          </a>
        </div>
      )}
    </header>
  );
}
