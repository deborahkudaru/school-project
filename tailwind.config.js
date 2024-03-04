/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ["Merriweather", "serif"],
        Montserrat: ["Montserrat", 'sans-serif'],
      },
      backgroundImage: {
        'man-standing': "url(/background-photo.jpg)",
      },
    },
  },
  plugins: [],
};
