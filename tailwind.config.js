/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        inconsolata: ['Inconsolata', 'sans-serif'],
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out ',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'transalateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
