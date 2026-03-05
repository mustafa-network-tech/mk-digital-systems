import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./config/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  images: { remotePatterns: [], formats: ["image/avif", "image/webp"] },
});

export default nextConfig;
