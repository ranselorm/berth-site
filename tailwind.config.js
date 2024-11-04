/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Aeonik", "sans-serif"],
      },
      colors: {
        grey: "#6b665f",
        red: "#e8dbca",
      },
    },
  },
  plugins: [],
};
