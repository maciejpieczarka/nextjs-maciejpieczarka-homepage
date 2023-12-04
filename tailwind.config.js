/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textDark: '#202023',
        textLight: '#ffffff',
        blueLight: {
          50: '#e2f3ff',
          100: '#b6d6fe',
          200: '#88b6f7',
          300: '#5b94f1',
          400: '#2d6fec',
          500: '#1363d2',
          600: '#0b57a4',
          700: '#044777',
          800: '#00314a',
          900: '#00141e',
        },
        blueDark: {
          50: '#E5EEFF',
          100: '#B8D0FF',
          200: '#8AB3FF',
          300: '#5C95FF',
          400: '#2E77FF',
          500: '#0059FF',
          600: '#0047CC',
          700: '#003599',
          800: '#002466',
          900: '#001233',
        },
      },
    },
  },
  plugins: [],
};
