/** @type {import('tailwindcss').Config} */
let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#39C198",
        red: "#FF6F6F",
        blue: "#6E7DFF",
        primary: "#373644",
        gray: "#9695A5",
        gray0: "#3C3A49",
        gray1: "#424554",
        gray2: "#EBEBEB",
        gray3: "#797C87",
        background:{
          dark: "#191919",
        },
        transparent: "rgba(0,0,0,0.2)",
      },
      screens: {
        xs: "0px",
        sm: "577px",
        md: "632px",
        lg: "993px",
        gl: "1024px",
        xl: "1201px",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, addBase, theme }) {
      addVariant("second", "&:nth-child(2)");
      addBase({
        ".scrollbar::-webkit-scrollbar": {
          height: "4px",
          width: "4px",
          backgroundColor: theme("colors.gray1"),
          borderRadius: "8px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "white",
          borderRadius: "8px",
        },
        body: {
          backgroundColor: "#2B2A39",
          color: 'white'
        },
        "#root": {
          height: '100vh'
        }
      });
    }),
  ],
};