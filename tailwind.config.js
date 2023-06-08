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
        "lightgray": "#e2e2e2",
        "crimson": "#DC143C",
        black: {
          20: "#00000033",
          40: "#00000066",
          60: "#00000099",
          80: "#000000cc",
          100: "#000000",
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-.5deg)' },
          '50%': { transform: 'rotate(.5deg)' },
        },
        zoom: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        breathe: {
          '0%': { transform: 'scale(1.03)' },
          '22%': { transform: 'scale(.95)' },
          '50%': { transform: 'scale(1.03)' },
          '75%': { transform: 'scale(.95)' },
          '100%': { transform: 'scale(1.03)' },
        },
        flip: {
          '0%, 50%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(90deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        breathe: 'breathe 4s ease-in-out infinite',
        flip: 'flip 1s ease-in-out',
        zoom: 'zoom 0.5s ease',
      }
    },
  },
  plugins: [],
}