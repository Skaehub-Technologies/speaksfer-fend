/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-dark': '#272537',
        dark: '#050615',
        'light-grey': '#595555'
      }
    }
  },
  plugins: []
};
