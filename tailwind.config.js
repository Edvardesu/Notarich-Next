/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/fragments/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "430px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('../../public/bg-hero1.png')",
        howtomake: "url('../../public/bg-howtomake.png') ",
        "try-howtomake": "url('../../public/try-bghowtomake.png') ",
        "heromenu-pattern": "url('../../public/bg-heromenu.png')",
        login: "url('../../public/login2.png')",
      },
    },
    fontFamily: {
      jakarta_sans: ["Plus Jakarta Sans", "sans-serif"],
      bruno_ace: ["Bruno Ace", "sans-serif"],
    },
  },
  plugins: [],
};
