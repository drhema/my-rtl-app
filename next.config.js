/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Changed from 'standalone' to 'export'
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
  // Handle trailing slashes consistently
  trailingSlash: false,
  // Ensure basePath is set correctly for Cloudflare Pages
  basePath: '',
}

module.exports = nextConfig