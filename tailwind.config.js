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
        'neon-yellow': '#FFD700', // Amarillo dorado
        'blue-500': '#1E3A8A', // Azul oscuro
        'purple-600': '#6D28D9', // Púrpura oscuro
        'yellow-300': '#FBBF24', // Amarillo
        'blue-400': '#3B82F6', // Azul
        'purple-500': '#8B5CF6', // Púrpura
        'yellow-400': '#F59E0B', // Amarillo oscuro
        'yellow-500': '#D97706', // Amarillo más oscuro
      },
      textShadow: {
        'neon': '0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 40px #FFD700', // Amarillo dorado
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
          textShadow: '0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 40px #FFD700', // Amarillo dorado
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};