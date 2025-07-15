/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/search",
        destination: "https://backendpodcast-production.up.railway.app",
      },
    ];
  },
  images: {
    domains: ["is1-ssl.mzstatic.com", "anchor.fm", "feeds.buzzsprout.com"],
  },
};

module.exports = nextConfig;
