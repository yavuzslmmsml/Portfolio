/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Space Grotesk', 'sans-serif'],
        sans: [
          'Space Grotesk',
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
