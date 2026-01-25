import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212",        // 60%
        secondary: "#E5E7EB",   // 30%
        accent: "#00E5FF",      // 10%
        accentPurple: "#7C4DFF"
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #00E5FF, #7C4DFF)"
      }
    }
  },
  plugins: []
};

export default config;
