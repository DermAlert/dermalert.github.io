/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./comofunciona.html",
    "./sobre.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'], // padrão
        'dm-sans': ['"DM Sans"', 'sans-serif'], // nova fonte
      },
    },
  },
  plugins: [],
}