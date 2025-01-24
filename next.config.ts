import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  }
};

// 使用 IIFE (立即调用函数表达式) 来处理异步操作
if (process.env.NODE_ENV === "development") {
  (async () => {
    await setupDevPlatform();
  })();
}

export default nextConfig;