/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC72C",
        secondary: "#DA291C",
        text: "#27251F",
      },
    },
  },
  plugins: [],
};
