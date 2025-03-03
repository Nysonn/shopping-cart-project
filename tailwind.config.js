/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    roboto: ["Roboto", "sans-serif"],
  },
  plugins: [require("@tailwindcss/typography")],
}