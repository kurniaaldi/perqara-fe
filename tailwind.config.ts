import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app.vue", "./pages/**/*.vue", "./component/**/*.vue"],
  theme: {
    screens: {
      mobile: { max: "639px" },
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ["Poppins", "Open Sans", "sans-serif"],
    },
    colors: {
      primary: "#1976d2",
      typo: "#1B365C",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg":
          "linear-gradient(180deg, #DCF4FF 0%, rgba(220, 244, 255, 0.24) 84%, rgba(221, 244, 255, 0.22) 100%)",
      },
    },
  },
  plugins: [],
};
