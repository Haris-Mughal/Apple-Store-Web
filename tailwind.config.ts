import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        cabrion: ['Cabrion', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
