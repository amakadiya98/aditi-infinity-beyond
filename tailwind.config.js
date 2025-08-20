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
        animation: {
        "fade-in": "fade-in 1s ease-out",
        "slide-in": "slide-in 1s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        blinkCaret: 'blinkCaret 0.75s step-end infinite',
        slide: 'slide 12s steps(4) infinite',
        typing: 'typing 3s steps(15) infinite',
        
      },
      keyframes: {
        slide: {
          '100%': { transform: 'translateY(-240px)' }, 
          typing: {
            from: { width: '0' },
            to: { width: '100%' },
          },
          blinkCaret: {
            from: { borderColor: 'transparent' },
            to: { borderColor: 'transparent' },
            '50%': { borderColor: 'white' },
          },
          
        },
        typing: {
          '40%, 60%': { left: 'calc(100% + 30px)' },
          '100%': { left: '0' },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-in": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "fade-in-up": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
          typing: {
            '40%, 60%': { left: 'calc(100% + 30px)' },
            '100%': { left: '0' },
          },
        },
      },
    },
  },
  plugins: [],
}
