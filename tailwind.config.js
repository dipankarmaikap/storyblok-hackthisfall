const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [`./src/**/*.{js,ts,jsx,tsx}`],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
