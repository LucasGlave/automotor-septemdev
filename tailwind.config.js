/** @type {import('tailwindcss').Config} */
// const textShadowPlugin = require('tailwindcss-textshadow')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        "celeste": "#2850f2",
        "logo": "#d6d2d1"
      },
      backgroundImage: {
        "azul-image":
          "linear-gradient(180deg, #3e62f2 0%, #2850f2 30%, #2850f2 70%, #203db3 100%)",
        "gray-image":
          "linear-gradient(180deg, #3f3f3f 0%, #181818 30%, #181818 70%, #373737 100%)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial'],
        sfpro: ['SF Pro', 'Helvetica', 'Arial', 'sans-serif'],
        fugaz_one: ["Fugaz One", "sans-serif"], 
      },
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

