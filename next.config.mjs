import withPWA from "next-pwa";

const nextConfig = withPWA({
  reactStrictMode: true, // ✅ Correct placement
  pwa: {
    dest: "public",
  },
});

export default nextConfig;
