module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
      },
      transitionProperty: {
        right: "right",
        left: "left",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
