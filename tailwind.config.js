/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        aboutFont: ["Bubblegum Sans"],
        aboutmeFont: ["SFMono-Regular"],
      },
      colors: {
        bodyColor: "#28282B",
        lightText: "#fff5fd",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#8a3f7b",
        borderColor: "#c791bc",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};
