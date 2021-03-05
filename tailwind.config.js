const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#F8AF87",
        "accent-2": "#33787B",
        "accent-3": "#E0EBEB",
        background: "#E5E5E5",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
    },
    fontFamily: {
      sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      jost: ["Jost", ...defaultTheme.fontFamily.sans],
      knewave: ["Knewave", ...defaultTheme.fontFamily.sans],
    },
  },
};
