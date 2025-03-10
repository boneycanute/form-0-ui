/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["."],
  },
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
