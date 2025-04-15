/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === "production" && {
    basePath: "/portfolio-re-revamp",
    assetPrefix: "/portfolio-re-revamp/",
  }),
};

export default nextConfig;
