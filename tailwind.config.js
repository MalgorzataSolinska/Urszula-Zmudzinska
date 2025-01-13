/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        inconsolata: ['Inconsolata', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
