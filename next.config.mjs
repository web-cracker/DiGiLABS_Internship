import withPWA from "next-pwa";

const withPWA = require("next-pwa")({
  dest: "public",
});

export default withPWA({
  reactStrictMode: true, // ✅ Move it outside the PWA config
});


export default nextConfig;
