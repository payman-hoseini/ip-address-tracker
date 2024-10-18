import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Very-Dark-Gray': 'hsl(0, 0%, 17%)',
        'Dark-Gray': 'hsl(0, 0%, 59%)'
      },
      fontFamily : {
        Rubik : ["Rubik"]
      }
    },
  },
  plugins: [],
};
export default config;
