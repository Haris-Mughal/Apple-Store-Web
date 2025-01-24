import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        skyBlue: "#4B98E6", // Custom color
        skyBg: "#E1E8ED", // Another custom color
        primary: "#1D4ED8", // Custom primary color
        secondary: "#F59E0B", // Custom secondary color
      },
    },
  },
  plugins: [],
};

export default config;
