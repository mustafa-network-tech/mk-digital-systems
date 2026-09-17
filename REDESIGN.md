# MK Digital Systems: audit and design decisions

Before editing, the existing Next 16 / React 18 / TypeScript / next-intl site was inspected. It offered TR/EN, home/services/projects/about/contact/legal, dark glass surfaces, slideshow photography, WebGL sphere and technology cards. Shared metadata, missing sitemap/robots/social cards and incorrect HTML language were migration priorities. Existing uncommitted recipient changes were preserved.

## Design direction

Warm paper, ink and cobalt derived from the original MK mark. Large editorial typography, asymmetric actual product screenshots, an interactive customer-needs journey, varied project stories and a signature typographic footer. Main pages are home, solutions, work and contact in four languages. No heavy animation or WebGL is loaded by the new public experience.

## Project provenance

The supplied https://mustafaoner.net/en/projects returned 404. Current https://mustafaoner.net/projects supplied 22 published records. Eight selected stories are construction management, MK Farm, Mavi Resepsiyon, Mavi Adisyon, MK TraceOps, Mavi Kadraj Otel, Mavi Gayrimenkul and Mavi Kafe. Published statuses distinguish active projects, work in development and demos. No measured customer outcomes are invented.

Real construction, farm and TraceOps screenshots were downloaded from the published gallery; the hotel screenshot from the published portfolio asset. These are actual interfaces, including their original language and empty sample data. Projects without published screenshots use explicitly labeled workflow diagrams. Public links come from the source records. Local source captures are gitignored.

## Contact and migration

The owner's email and WhatsApp values remain. Formspree and SMTP delivery are retained with honest feedback and stronger validation. The company field no longer acts as a bot trap. Legacy routes permanently redirect; localized legal routes remain.

## Domain strategy

`SITE_URL` is the only production origin. Without configuration, local absolute metadata uses localhost, robots disallows crawling, metadata is noindex and sitemap is empty. A configured HTTPS production origin enables 24 localized main/legal entries with language alternates. Vercel previews remain noindex. Set the final domain and rebuild before connecting the public domain.
