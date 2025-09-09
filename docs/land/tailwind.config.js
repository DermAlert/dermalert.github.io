/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 habilita dark mode via classe .dark
  content: [
    "./index.html",
    "./comofunciona.html",
    "./sobre.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
