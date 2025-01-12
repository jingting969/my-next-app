import type { Config } from "tailwindcss";

export default {
  // 通过 content 配置，Tailwind CSS 可以知道哪些文件需要扫描，从而优化生成的 CSS 文件大小
  content: [
    // 扫描 src/pages 目录下的所有 JavaScript、TypeScript、JSX、TSX 和 MDX 文件。
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
