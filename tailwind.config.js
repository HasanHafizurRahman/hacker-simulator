/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            green: {
                500: '#00FF00',
            },
        },
        fontFamily: {
            mono: ['Courier New', 'monospace'],
        },
    },
},
  plugins: [],
}