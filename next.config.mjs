import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// Relative path required: Turbopack does not support Windows absolute paths in resolveAlias.
const requestConfigPath = "./i18n/request.ts";

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  images: { remotePatterns: [], formats: ["image/avif", "image/webp"] },
  // Next.js 16 uses top-level turbopack (not experimental.turbo). The next-intl plugin
  // sets experimental.turbo.resolveAlias which is ignored, so we set the alias here.
  turbopack: {
    resolveAlias: {
      "next-intl/config": requestConfigPath,
    },
  },
});

export default nextConfig;
