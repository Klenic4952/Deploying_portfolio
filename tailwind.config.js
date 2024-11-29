/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beigelight: "#FFF1DD",
        beige: "#FDEACF",
        brown: "#DBAA78",
        purplelight: "#987E9E",
        midpurple: "#966E9E",
        purpledark: "#1B0F1C",
      },
    },
  },
  plugins: [],
};
