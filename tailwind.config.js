/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,js,tsx,jsx,html}"],
  theme: {
    extend: {
      colors:{
        "BLUE-900": '#0B0D17',
        "BLUE-300": '#D0D6F9',
        "LOGO-LINE": '#979797',

      },
      fontFamily: {
        sans:["Barlow Condensed", "sans-serif"],
        serif: ["Bellefair", "serif"],
      }
    },
  },
  plugins: [],
}

