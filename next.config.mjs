/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'resources.positiveness.club' },
      { protocol: 'https', hostname: 'positiveness.club' },
    ],
  },
  async redirects() {
    return [
      // Legacy subdomain → subpath migration
      {
        source: '/:path*',
        has: [{ type: 'host', value: '1perc.positiveness.club' }],
        destination: 'https://positiveness.club/apps/1perc/:path*',
        permanent: true,
      },
      // www → apex
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.positiveness.club' }],
        destination: 'https://positiveness.club/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
