/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_API: "https://garrafa-back.vercel.app/",
        SOCKET_API: "http://127.0.0.1:80"
    },
    experimental: {
      serverActions: true,
    },
}

module.exports = nextConfig
