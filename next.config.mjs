/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/rent",
        destination: "/catalog",
      },
    ];
  },
};

export default nextConfig;
