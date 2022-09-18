/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "light-cyan": "hsl(158, 36%, 42%)",
        cream: "hsl(30, 38%, 92%)",
        "dark-blue": "hsl(212, 21%, 14%)",
        "grayish-blue": "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        fraunces: "'Fraunces', serif",
        monoserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "10px" },
      });
    }),
  ],
};
