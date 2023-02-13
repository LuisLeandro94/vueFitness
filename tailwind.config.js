/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      accent: '#42b883',
      accentHover: '#297553',
      background: '#35495e',
      text: '#171717',
      border: '#cecece',
      transparent: 'transparent'
    },
    extend: {},
  },
  plugins: [],
};
