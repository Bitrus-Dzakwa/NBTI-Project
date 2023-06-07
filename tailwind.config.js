const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        yellowy: {
          100: "#EA9715a9",
          900: "#EA9715",
        },
        greengray: {
          100: "#475443a9",
          900: "#475443",
        },
      },
    },
  },
  plugins: [],
};
