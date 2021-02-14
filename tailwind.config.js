module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "logo-pink-dot": "#FF4C60",
      },
      fontFamily: {
        heading: ["Source Sans Pro", "sans-serif"],
        body: [
          "Open Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transitionProperty: ["group-hover", "hover"],
    },
  },
  plugins: [],
};
