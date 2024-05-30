/** @type {import('tailwindcss').Config} */
const textShadowPlugin = require('tailwindcss-textshadow')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "celeste": "#047FD9"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial'],
        sfpro: ['SF Pro', 'Helvetica', 'Arial', 'sans-serif'],
      },
      // textS: {
      //   custom: '0 4px 9.2px 0 rgba(0, 0, 0, 0.25)',
      // },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

