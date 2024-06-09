/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'yellow-100': '#FFF9DB', // Custom light yellow color
        'green-700': '#357a38',  // Custom green color
      },
    },
  },
  plugins: [],
}

