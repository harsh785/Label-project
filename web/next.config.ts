import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Label-project',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
