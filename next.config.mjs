/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'neiwai.life',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
    dangerouslyAllowSVG: false,
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
