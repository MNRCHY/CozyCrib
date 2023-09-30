/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#794028',
        'secondary' : '#C5903F',
        'dark' : '#0E0504',
        'light' : '#EDEDED'
      },
    },
  },
  plugins: [],
}

