import { Link } from "@/config/navigation";
import { type Locale } from "@/config/i18n";
import { LocaleLinks } from "./LocaleLinks";
import type { SiteContent } from "@/content/site";
import { contactConfig } from "@/lib/contact-config";
import { Arrow } from "./Arrow";
import { SocialIcon } from "./SocialIcon";
import { socialLinks, siteLinks } from "@/lib/site-links";
import { getSolutionsCopy, solutionIds, solutionRoutes } from "@/content/solutions";
import { FooterInvitation } from "./FooterInvitation";
export function SiteFooter({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteContent;
}) {
  const solutions = getSolutionsCopy(locale);
  return (
    <footer className="site-footer">
      <div className="wrap">
        <FooterInvitation>
        <div className="footer-invitation">
          <div>
            <p className="eyebrow">{copy.footer.label}</p>
            <h2>{copy.footer.title}</h2>
          </div>
          <div className="footer-contact-actions">
            <a className="text-link" href={contactConfig.phoneHref}>
              {copy.contact.call}
              <Arrow diagonal />
            </a>
            <a
              className="button"
              href={contactConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.contact.whatsapp}
              <Arrow diagonal />
            </a>
            <a className="text-link" href={contactConfig.emailHref}>
              {copy.contact.emailUs}
              <Arrow diagonal />
            </a>
          </div>
        </div>
        </FooterInvitation>
        <div className="footer-mid">
          <p>{copy.footer.description}</p>
          <nav aria-label={copy.nav.home}>
            <Link href="/solutions">{copy.nav.solutions}</Link>
            <Link href="/work">{copy.nav.work}</Link>
            <Link href="/contact">{copy.nav.contact}</Link>
          </nav>
          <nav className="footer-solutions" aria-labelledby="footer-solutions-title">
            <p id="footer-solutions-title">{copy.nav.solutions}</p>
            {solutionIds.map((id) => (
              <Link key={id} href={solutionRoutes[id]}>
                {solutions.items[id].name}
              </Link>
            ))}
          </nav>
          <a className="footer-email" href={contactConfig.emailHref}>
            {contactConfig.email}
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
        <div className="footer-signature">
          <nav className="footer-socials" aria-label={copy.footer.socialLabel}>
            {socialLinks
              .filter((link) => link.url)
              .map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={copy.footer.socialProfile.replace(
                    "{platform}",
                    link.name,
                  )}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
          </nav>
          <p>
            {copy.footer.signature}
            <span aria-hidden="true"> · </span>
            <a
              href={siteLinks.creator}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteLinks.creatorLabel}
              <Arrow diagonal />
            </a>
          </p>
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
