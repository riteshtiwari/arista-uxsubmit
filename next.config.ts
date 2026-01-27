import type { NextConfig } from "next";

// Use basePath for embedded deployment (in portfolio), skip for standalone
const isStandalone = process.env.NEXT_PUBLIC_STANDALONE === 'true';
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  // Disable static export in dev mode for local testing (Vercel still builds with it)
  ...(!isDev ? { output: 'export' } : {}),
  // Skip basePath in dev for easier local testing
  ...(isDev || isStandalone ? {} : { basePath: '/presentations/designed-correctly' }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
