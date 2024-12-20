/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textblack: "rgba(0, 0, 0, 1)",
        textSideBar: "rgba(20, 20, 20, 1)",
        fullwhite: "rgba(255, 255, 255, 1)",
        colororange: "rgba(236, 103, 36, 1)",
        colorgray: "rgba(217, 217, 217, 1)",
        colorplaceholder: "rgba(170, 170, 170, 1)",
        colorbackground: "rgba(245, 245, 245, 1)",
        colorbgblack: "rgba(70, 70, 70, 1)",
        colorbgmodal: "rgba(0, 0, 0, 0.2)",
      },
      fontSize: {
        size36: "36px",
        size24: "24px",
        size22: "22px",
        size16: "16px",
        size14: "14px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        geologica: ["GeologicaCoursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
