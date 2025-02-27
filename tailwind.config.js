/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
        InterLight: "Inter Light",
        InterMedium: "Inter Medium",
        InterSemiBold: "Inter SemiBold",
        InterBold: "Inter Bold",
        InterExtraBold: "Inter ExtraBold",
        InterBlack: "Inter Black",
      },
      container: {
        center: true,
        screens: {
          xs: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
        padding: {
          DEFAULT: "1rem",
        },
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
