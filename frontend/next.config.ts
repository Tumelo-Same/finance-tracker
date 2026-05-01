import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? "/finance-tracker" : "",
  assetPrefix: isProd ? "/finance-tracker" : "",
};

export default nextConfig;
