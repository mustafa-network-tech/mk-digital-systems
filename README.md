# MK Digital Systems

Premium, minimal digital systems studio site.

## Internationalization (i18n)

**All UI text must use i18n keys. No hardcoded strings.**

- Every user-facing string (titles, buttons, labels, nav, footer, microcopy) must come from the translation dictionaries.
- Add new text to both `messages/en.json` and `messages/tr.json`.
- See [I18N.md](./I18N.md) for namespace usage and rules.

## Tech

- Next.js (App Router), TypeScript, Tailwind, next-intl.
- Locales: Turkish (tr), English (en). Route prefix: `/tr/*`, `/en/*`.
