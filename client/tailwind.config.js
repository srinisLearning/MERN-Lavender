/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6a5acd",
          200: "#9370db",
          600: "#7b68ee",
          900: "#483d8b",
        },
        secondry: "#ffbf00",
        tertiary: "#72bf6a",
      },
    },
  },
  plugins: [],
};
