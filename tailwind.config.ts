import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f9",
          100: "#d5e0ef",
          600: "#1a4a8a",
          700: "#0f3570",
          800: "#0a2555",
          900: "#071a3d",
        },
        brand: {
          orange: "#F58220",
          "orange-dark": "#d96e10",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
