import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  reactCompiler: true,
  transpilePackages: ["@workspace/database", "@workspace/ui"],
};

export default withMDX(config);
