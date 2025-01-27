import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // bgcol: "#132dd4", // Background color
        bgcol: "#12141D", // Background color
        para1: "#B7B8BB", // Paragraph 1
        para2: "#FAFAFA", // Paragraph 2
        gradStart: "#6B00FF", // Gradient start color
        gradEnd: "#FF00FF", // Gradient end color
        lightBlue: "#0EA5E9",
      },
    },
  },
  plugins: [],
} satisfies Config;
