import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Noto Sans", "sans-serif"]
      },
      boxShadow: {
        'text-xs': '1px 1px 0 rgba(0, 0, 0, 0.1)',
        'text-sm': '1px 1px 1px rgba(0, 0, 0, 0.2)',
        'text-md': '2px 2px 2px rgba(0, 0, 0, 0.3)',
        'text-lg': '3px 3px 3px rgba(0, 0, 0, 0.4)',
        'text-xl': '4px 4px 4px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#501F84",
        customPurple: "#501f84",
        lightText: '#EDF1F7',
        orange1: '#e14369',
        customPurplelight:'#ffacdb',
        custompurple2:'#501F84',
        customDarkpurple:'#16002e'
      },
    },
  },
  plugins: [],
};
export default config;
