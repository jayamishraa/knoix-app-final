/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-ts-tradingview-widgets"],
  images: {
    domains: ["assets.coingecko.com"],
  },
};

export default nextConfig;
