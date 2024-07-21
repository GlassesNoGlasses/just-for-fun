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
        "main": "#1d4d6f",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "chef": "url('/images/kind_chef.jpeg')",
        "pedro": "url('/images/pedro.jpeg')",
        "isiy": "url('/images/cant-tell.jpeg')",
        "application-simulator": "url('/images/applications-everywhere.jpeg')",
      },

      keyframes: {
        popIn: {
          "0%": { 'opacity': '0'},
          "90%": { 'opacity': '0'},
          "100%": { 'opacity': '1'},
        },
      },

      animation: {
        "pedro-1": "popIn 4s ease-in forwards",
        "pedro-2": "popIn 4.5s ease-in forwards",
        "pedro-3": "popIn 6s ease-in forwards",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
};
export default config;
