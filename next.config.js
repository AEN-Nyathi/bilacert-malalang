
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zpgxnohxizcmuwbosapx.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
   formats: ['image/webp', 'image/avif'],
   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
