/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Família usada pela classe `font-sans`
        sans: ['Lexend', 'sans-serif'],

        // Classe utilitária: `font-dm-sans`
        'dm-sans': ['"DM Sans"', 'sans-serif'],

        // Classe utilitária: `font-noto`
        noto: ['"Noto Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
