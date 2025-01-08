module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // o 'media' o 'class'
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-200%' },
          '100%': { backgroundPosition: '200%' },
        },
      },
      animation: {
        shine: 'shine 5s infinite linear',
      },
      colors: {
        'neon-yellow': '#FFFF00',
      },
      textShadow: {
        'neon': '0 0 5px #FFFF00, 0 0 10px #FFFF00, 0 0 20px #FFFF00, 0 0 40px #FFFF00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon': {
          textShadow: '0 0 5px #FFFF00, 0 0 10px #FFFF00, 0 0 20px #FFFF00, 0 0 40px #FFFF00',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};