import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ATC: ["ATC"],
      },
    },
  },
  plugins: [],
};

export default config;
