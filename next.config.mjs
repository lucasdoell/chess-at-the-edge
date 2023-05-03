import "./env/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/55987186",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
