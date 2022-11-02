/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        red: "#CD163F",
        black: "#000",
        white: "#fff",
        blue: "#00558F",
        blueDark: "#0E152E",
      },
      margin: {
        section: "80px",
        sectionMB: "50px",
      },
      spacing: {
        section: "80px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
