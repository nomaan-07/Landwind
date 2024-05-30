/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
        InterMedium: "Inter Medium",
        InterSemiBold: "Inter SemiBold",
        InterExtraBold: "Inter ExtraBold",
        InterBlack: "Inter Black",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.625rem",
          xl: "0",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
