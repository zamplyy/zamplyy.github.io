const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#F8AF87",
        "accent-2": "#33787B",
        "accent-3": "#E0EBEB",
        "text-color": "#343434",
        "grey-background": "#EDEDED",
        background: "#E5E5E5",
        border: "#C4C4C4",
        good: "#C2E4D8",
        bad: "#F2C8C2",
      },
      borderRadius: {
        "4xl": "40px",
      },
    },
    fontFamily: {
      sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      jost: ["Jost", ...defaultTheme.fontFamily.sans],
      knewave: ["Knewave", ...defaultTheme.fontFamily.sans],
    },
  },
};
