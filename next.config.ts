import type { NextConfig } from "next";

const repositoryName = "decor-sandri-festas";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  assetPrefix: isGitHubPages ? `/${repositoryName}/` : "",
  images: { unoptimized: true },
};

export default nextConfig;
