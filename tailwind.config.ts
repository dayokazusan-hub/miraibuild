import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#182235",
        navy: "#15345f",
        steel: "#496276",
        mist: "#eef3f6",
        line: "#d8e0e6",
        signal: "#d84335",
        gold: "#c8942f"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(24, 34, 53, 0.08)",
        lift: "0 22px 45px rgba(21, 52, 95, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
