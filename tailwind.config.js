/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,svelte}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'journal': "url('./src/assets/journal.png')",
        'earth' : "url('./src/assets/earth.png')",
        'elipse' : "url('./src/assets/ellipse.png')"
      }
    },
  },
  plugins: [],
}

