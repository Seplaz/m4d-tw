/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'vkgrey': '#f5f5f5',
      'egais': '#2291ff',
      'edo': '#00bea2',
      'eis': '#366af3',
      'chesznak': '#f6f32e',
      'fts': '#26ad50'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

