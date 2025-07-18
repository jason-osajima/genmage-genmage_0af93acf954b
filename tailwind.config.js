/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'coffee-brown': '#6B4423',
        'coffee-cream': '#D2B48C',
        'coffee-dark': '#3C2415',
      },
      fontFamily: {
        'coffee': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}