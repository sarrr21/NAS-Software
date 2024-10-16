/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: '#FEF9C3', // A nice soft light yellow
        darkGray: '#111827',   
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        customSans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',
      },
    },
    
  },
  plugins: [],
}

