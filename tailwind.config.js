/** @type {import('tailwindcss').Config} */
import image from './src/images/'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs':"470px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [  
    function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
}],
}

