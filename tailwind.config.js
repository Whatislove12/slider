/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        's': '220px',
        'ss': '500px',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '9': 'repeat(9, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

