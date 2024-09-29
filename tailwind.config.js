/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FD8311',
        secondary: '#313d4d',
        "secondary-bg" : "#f7f7f7" 
      },
      fontFamily: {
        'primary' : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}