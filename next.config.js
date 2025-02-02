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
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
  // Disable unnecessary features for Cloudflare
  poweredByHeader: false,
  // Enable compression
  compress: true,
}

module.exports = nextConfig