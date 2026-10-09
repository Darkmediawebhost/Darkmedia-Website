import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "typewriter-effect"],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/projects", destination: "https://portfolio.darkmedia.tech/", permanent: true },
    ];
  },
};

export default nextConfig;
