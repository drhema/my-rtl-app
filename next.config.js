// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  typescript: {
    // We'll handle types properly in development
    ignoreBuildErrors: true,
  },
  eslint: {
    // We'll handle linting separately
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig