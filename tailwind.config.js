/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#0a192f',
        "background": '#000000',
        "background-foreground": '#ffffff',
      },
    },
  },
  plugins: [],
}
