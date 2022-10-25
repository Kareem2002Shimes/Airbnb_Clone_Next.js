/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  env: {
    MAPBOX_KEY:
      "pk.eyJ1Ijoia2FyZWVtMjAwMnNoaW1lcyIsImEiOiJjbDluYWkwMDAwNThqM3JuemUxNno4dnYxIn0.x50lsqY7UshPMYiisILjZg",
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "images.unsplash.com",
      "links.papareact.com",
    ],
  },
};
