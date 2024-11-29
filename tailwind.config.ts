import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['"GeistVF"', "sans-serif"],
        sub: ['"GeistMonoVF"', "sans-serif"]
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundImage: {
        "container_bg": "url('/container_bg.png')",
        "body_bg": "url('/body_bg.png')",

        "input-search": "url('/input-search-bg.png')",
        "notch_bg": "url('/large-notch-darkgray.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
