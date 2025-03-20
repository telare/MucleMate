import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import "./src/utils/i18n/request"
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};
const withNextIntl = createNextIntlPlugin("./src/utils/i18n/request.ts");
export default withNextIntl(nextConfig);
