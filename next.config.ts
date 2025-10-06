import type { NextConfig } from "next";
import { fetchRedirects } from "@/sanity/lib/fetchRedirects";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return (await fetchRedirects())
      .filter(
        (redirect) => Boolean(redirect.source) && Boolean(redirect.destination)
      )
      .map((redirect) => ({
        source: redirect.source || "",
        destination: redirect.destination || "",
        permanent: redirect.permanent === true,
      }));
  },
  experimental: {
    turbopackScopeHoisting: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
