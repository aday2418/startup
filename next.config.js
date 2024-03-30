/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "i.scdn.co",
        ]
    },
    experimental: {
        serverActions: {
          bodySizeLimit: '16mb',
        },
      },
}

module.exports = nextConfig
