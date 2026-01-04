import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import { urls } from "./src/config/urls";

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  transpilePackages: ["@workspace/database", "@workspace/ui"],
  allowedDevOrigins: [urls.ngrok],
  async rewrites() {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/docs/:path*",
      },
    ];
  },
};

export default withMDX(config);
