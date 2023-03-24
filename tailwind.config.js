/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'rouge': '#350A06',
        'rose': '#CB7169',
        'marron': '#603c32',
        'marrouge': '#4C2121',
        'marrose': '#96574E',
        'rosouge': '#803E38',
        'rosedark': '#BD6962',
      },
    },
  },
  plugins: [],
  important: true,
}
