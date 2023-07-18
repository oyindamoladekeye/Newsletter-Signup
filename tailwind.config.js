/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-slate-grey" : "#242742",
        "charcoal-grey" : "hsl(235, 18%, 26%)",
        "grey" : "hsl(231, 7%, 60%)",
        "tomato": "hsl(4, 100%, 67%)"
      }
    },
  },
  plugins: [],
}

