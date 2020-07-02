module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        "geist-blue": "#0070f3",
        "regal-blue": "#243c5a",
      },
    },
  },
  variants: {},
  plugins: [],
};
