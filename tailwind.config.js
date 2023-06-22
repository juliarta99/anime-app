/** @type {import('tailwindcss').Config} */
module.exports = {
  purge : [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

