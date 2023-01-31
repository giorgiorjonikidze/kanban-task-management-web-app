/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    colors: {
      'purple': "#635FC7",
      'light_purple': "#A8A4FF",
      'black': "#000112",
      'very_dark': "# 20212C",
      'datk_grey': "#2B2C37",
      'grey': "#3E3F4E",
      'light_grey': "#828FA3",
      'light': "#E4EBFA",
      'white': "#ffffff"
    },
    fontSize: {
      sm: "12px",
      md: "15px",
      xl: "18px",
      "2xl": "24px",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      sm: "375px",
      md: "768px",
      xl: "1440px",
    },
  },
  plugins: [],
};
