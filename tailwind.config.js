/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        secondary: "#E5E7EB",
        accent: "#00E5FF",
        accentPurple: "#7C4DFF",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #0D47A1, #1976D2)",
      },
    },
  },
  plugins: [],
};
