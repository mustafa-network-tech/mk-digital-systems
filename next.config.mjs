import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// Relative path required: Turbopack does not support Windows absolute paths in resolveAlias.
const requestConfigPath = "./i18n/request.ts";
if (process.env.VERCEL_ENV === "production" && !process.env.SITE_URL?.startsWith("https://")) {
  throw new Error("Set SITE_URL to the final HTTPS production origin before deploying production.");
}

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/:locale(tr|en|de|fr)/services", destination: "/:locale/solutions", permanent: true },
      { source: "/:locale(tr|en|de|fr)/projects", destination: "/:locale/work", permanent: true },
      { source: "/:locale(tr|en|de|fr)/about", destination: "/:locale", permanent: true },
    ];
  },
  // Next.js 16 uses top-level turbopack (not experimental.turbo). The next-intl plugin
  // sets experimental.turbo.resolveAlias which is ignored, so we set the alias here.
  turbopack: {
    resolveAlias: {
      "next-intl/config": requestConfigPath,
    },
  },
});

export default nextConfig;
