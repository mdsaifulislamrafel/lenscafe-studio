/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths according to your project
  ],
  theme: {
    extend: {
      fontFamily: {
        Fira_Sans: ['"Fira Sans"', 'sans-serif'],
      },
      animation: {
        movePupil: 'movePupil 2s infinite ease-in-out',
      },
      keyframes: {
        movePupil: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-10px, -10px)' },
          '50%': { transform: 'translate(10px, 10px)' },
          '75%': { transform: 'translate(-10px, 10px)' },
        },
      },
    },
  },
  plugins: [],
};
