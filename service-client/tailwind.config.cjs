/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          1: "#E1B083",
          2: "#C48D60",
        },
        nature: {
          2: "#9BBA74",
        },
      },
      backgroundImage: {
        "nature": "url('assets/bg-about.jpeg')",
        "walk": "url('assets/man-walking-dog.jpg')"
      },
    },
  },
  plugins: [],
};
