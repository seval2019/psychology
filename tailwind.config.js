/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        primary: "#00bcd4",
        primary: "#ffbe33",
        secondary: "#222831",
      }, 
      fontFamily: {
        oswald: ["Oswald, sans-serif"], // Adds a new `font-display` class,
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};