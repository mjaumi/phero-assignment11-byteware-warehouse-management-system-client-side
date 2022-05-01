module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'byteware-base-red': '#ff2f23',
        'byteware-light-red': '#fb4a40',
        'byteware-white': '#fefcfb',
        'byteware-dark-gray': '#5f5f6c',
        'byteware-light-gray': '#f7f7f7',
        'byteware-border-gray': '#eeeeee',
        'byteware-footer-bg': '#1d2124',
        'byteware-genre-bg': '#F2F4F8',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      },
      dropShadow: {
        'byteware-btn-shadow': '0px 5px 15px rgba(255, 47, 35, 0.4)',
      },
      gridTemplateRows: {
        'byteware-item-card-layout': '50px 1fr 1fr',
      }
    },
  },
  plugins: [],
}
