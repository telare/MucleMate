import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import "./src/utils/i18n/request";
import withBundleAnalyzer from "@next/bundle-analyzer";
const nextConfig: NextConfig = {
  images: { unoptimized: true },
};
const withNextIntl = createNextIntlPlugin("./src/utils/i18n/request.ts");

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(withNextIntl(nextConfig));
