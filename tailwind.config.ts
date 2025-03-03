import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app.vue", "./pages/**/*.vue", "./component/**/*.vue"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#1E232B",
      },
      screens: {
        mobile: { max: "639px" },
      },
    },
  },
  plugins: [],
};
