/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      white: "hsl(0, 100%, 100%)",
      'light-gray': '#d6e2f0',
      'grayish-blue': '#7b879d',
      'dark-blue': '#1f3251'
    },
    extend: {},
  },
  plugins: [],
}
