module.exports = {
  purge: {
    content: ['./src/**/*.jsx', './index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0fa9e6',
          light: '#3fbaeb',
          dark: '#0c87b8',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover'],
    },
  },
  plugins: [],
}
