/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // garante que todos os arquivos em src sejam incluídos
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'], // adiciona Lexend como padrão do font-sans
      },
    },
  },
  plugins: [],
}
