/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['*'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable unnecessary features
  poweredByHeader: false,
  // Enable compression
  compress: true,
  // Required for Cloudflare Pages
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
  }
}

module.exports = nextConfig