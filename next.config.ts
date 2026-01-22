import type { NextConfig } from "next";

// Use basePath for embedded deployment (in portfolio), skip for standalone
const isStandalone = process.env.NEXT_PUBLIC_STANDALONE === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  ...(isStandalone ? {} : { basePath: '/presentations/designed-correctly' }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
