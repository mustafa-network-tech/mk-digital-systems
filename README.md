# MK Digital Systems

Modern agency website: Next.js App Router, TypeScript, next-intl; Turkish, English, German and French.

## Development

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run start
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run test:e2e
```

Primary routes: `/{tr,en,de,fr}`, `/solutions`, `/work`, `/contact`. Existing `/services`, `/projects`, `/about` bookmarks redirect permanently. Legal pages remain available.

## Content and design

Public copy is centralized in `content/locales/*.ts`, typed by `content/site.ts`. Project provenance and status live in `content/projects.ts`; additional localized stories in `content/project-stories.ts`. Actual screenshot assets are in `public/work`, original MK identity in `public/brand`, licensed local Inter fonts in `public/fonts`. New UI uses `components/brand` and `app/globals.css`. Old components remain available but are not part of the new public page composition.

## Configuration

Copy `.env.example` values into your deployment environment. Set `SITE_URL` to the final plain HTTPS origin, then rebuild. Without it, robots blocks indexing and the sitemap is empty. Vercel preview remains noindex. Production URLs, metadata, alternates, sitemap and JSON-LD share `lib/site-config.ts`.

Contact retains Formspree and SMTP. The existing Formspree ID remains the fallback; set `NEXT_PUBLIC_FORMSPREE_FORM_ID=disabled` to use `/api/contact` and configure SMTP credentials. Keep credentials server-side. SMTP failures return a real error. The company field is genuine; `website` is the honeypot. Rate limiting is per instance, not a distributed protection service. Provider delivery must be checked in the owner's account before public launch; automated tests mock delivery and do not send mail.

## Verification

Playwright checks all main routes in four languages at seven viewport widths, navigation, language preservation, form validation/failure/success, reduced motion, metadata, social cards, indexing, redirects and accessibility. Screenshots are written to `artifacts/qa`; HTML report to `playwright-report`. Default executable is installed Windows Chrome. Override `PLAYWRIGHT_CHROME_PATH` on other machines. Tests use port 3015 and reuse an existing local production server.

See [redesign report](REDESIGN-REPORT.md) and [audit](REDESIGN.md).

## Starting-price catalog

Home includes a compact three-category preview; Solutions includes the eight-level catalog at `#pricing`. `content/pricing.ts` is the single amount/market source; `content/pricing-copy.ts` contains all four localized narratives. All locales currently use the independently defined Turkish price book in TRY. Future market books can use EUR/USD without exchange-rate conversion. Contact URLs live in `lib/contact-config.ts`; `NEXT_PUBLIC_PHONE_NUMBER` optionally overrides the call number, otherwise the existing WhatsApp number is used.

See [pricing implementation report](PRICING-REPORT.md).

## Production contact details

The central contact configuration (`lib/contact-config.ts`) defaults to `iletisim@mk-digitalsystems.com` and `0545 659 75 51` (`+905456597551`). Privacy/terms email links, footer, Contact and Organization JSON-LD use that source. Update old deployment overrides for `NEXT_PUBLIC_CONTACT_EMAIL` and `MAIL_TO` before redeploying. Formspree recipients must be updated in the provider account separately; changing source code does not change the account's recipient. See [production cleanup report](PRODUCTION-CLEANUP-REPORT.md).

## Footer social links

Instagram (`@mk_digital.systems`) and TikTok (`@mk_digital_systems`) are configured in `lib/site-links.ts`. Only configured URLs render; add a verified Facebook URL there when available. The footer keeps its primary call/WhatsApp/email actions, small monochrome social icons, localized accessible labels and the mustafaoner.net creator credit. Social links open in a new tab. The requested map was cancelled and no map iframe or map configuration is included.
