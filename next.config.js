/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_IP: process.env.SERVER_IP, // Local Backend Server
    CAPTCHA_KEY: process.env.CAPTCHA_KEY, // Test Captcha by Google
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
