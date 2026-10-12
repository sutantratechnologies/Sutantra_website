import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
