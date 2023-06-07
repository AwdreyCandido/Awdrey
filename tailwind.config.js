/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      fontSize: {
        "base": "1.6rem",
        "quaternary-h": "1.8rem",
        "tertiary-h": "2rem",
        "secondary-h": "2.2rem",
        "primary-h": "3.6rem",
        "header": "4.5rem",
      },
      colors: {
        "golden": "#FFD866",
        "darkgray": "#242424",
        black: {
          20: "#00000033",
          40: "#00000066",
          60: "#00000099",
          80: "#000000cc",
          100: "#000000",
        },
      }
    },
  },
  plugins: [],
}