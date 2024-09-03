/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOutInSequence: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '25%': { opacity: '0', transform: 'translateX(-20%)' },
          '50%': { opacity: '0', transform: 'translateX(20%)' },
          '75%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-out-in-sequence': 'fadeOutInSequence 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
