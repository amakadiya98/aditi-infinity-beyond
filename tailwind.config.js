/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        dm: 'DM Sans',
        indie: 'Indie Flower', 
        bricolage: 'Bricolage Grotesque',
        instrument: 'Instrument Serif',
      },
    },
  },
  plugins: [],
}
