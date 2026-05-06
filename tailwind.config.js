/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
        sans: [
          'Kalam',
          'cursive',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
