import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true, // ✅ Move this outside PWA
  pwa: {
    dest: "public",
  },
};

export default withPWA(nextConfig);
