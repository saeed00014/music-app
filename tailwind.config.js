/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkMainbg: "rgb(20, 20, 20)",
        mainbg: "rgb(50, 50, 50)",
        lightMainbg: "rgb(60, 60, 60)",
        lighterMainbg: "rgb(100, 100, 100)",
        lighterMainbg2: "rgb(150, 150, 150)",
        navhover: "rgb(82, 82, 82)",
      },
      screens: {
        sm: "320px",
        md: "640px",
        lg: "960px",
        xl: "1280px",
        xxl: "1780px",
      },
    },
  },
  plugins: [],
};
