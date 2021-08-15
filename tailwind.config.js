module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    minHeight: {
      half: "70vh",
      full: "100vh",
      forHeader: "20vh",
      forFooter: "35vh",
      forBackLinks: "10vh",
    },
    minWidth: {
      lg: "65%",
      sm: "30%",
    },
    boxShadow: {
      lg: "0 10px 20px -2px black",
    },
  },
  variants: {
    container: {
      center: true,
    },
  },
  plugins: [],
};
