/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "i.scdn.co",
        ]
    },
    experimental: {
        serverActions: {
          bodySizeLimit: '3mb',
        },
      },
}

module.exports = nextConfig
