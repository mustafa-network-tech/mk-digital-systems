import { Link } from "@/config/navigation";
import { type Locale } from "@/config/i18n";
import { LocaleLinks } from "./LocaleLinks";
import type { SiteContent } from "@/content/site";
import { CONTACT_EMAIL } from "@/lib/constants";
import { contactConfig } from "@/lib/contact-config";
import { Arrow } from "./Arrow";
export function SiteFooter({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteContent;
}) {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-invitation">
          <div>
            <p className="eyebrow">{copy.footer.label}</p>
            <h2>{copy.footer.title}</h2>
          </div>
          <a
            href={contactConfig.whatsappHref}
            className="footer-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{copy.footer.cta}</span>
            <span className="cta-circle">
              <Arrow diagonal />
            </span>
          </a>
        </div>
        <div className="footer-mid">
          <p>{copy.footer.description}</p>
          <nav aria-label={copy.nav.home}>
            <Link href="/solutions">{copy.nav.solutions}</Link>
            <Link href="/work">{copy.nav.work}</Link>
            <Link href="/contact">{copy.nav.contact}</Link>
          </nav>
          <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
            <Arrow diagonal />
          </a>
        </div>
        <div className="footer-oversize" aria-label="MK Digital Systems">
          <span>MK DIGITAL</span>
          <span>
            SYSTEMS
            <span className="brand-dot" aria-hidden="true">
              ✳
            </span>
          </span>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} MK Digital Systems.{" "}
            {copy.footer.copyright}
          </p>
          <div>
            <Link href="/legal/privacy">{copy.footer.privacy}</Link>
            <Link href="/legal/terms">{copy.footer.terms}</Link>
          </div>
          <LocaleLinks locale={locale} />
          <a href="#top" className="back-top" aria-label={copy.footer.top}>
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
