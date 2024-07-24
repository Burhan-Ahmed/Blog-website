/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#110729',
      },
      screens: {
        small: '1110px',
      },
    },
  },
  plugins: [],
}

