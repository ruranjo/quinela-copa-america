/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgMain:'white',
        primaryblue:'hsl(211, 96%, 24%)',
        primary:'hsl(217, 100%, 25%)',
        secondary:'hsl(359, 99%, 56%)'
      }
    },
  },
  plugins: [],
}