module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        babyBlue: "#DEEBF8",
        lemony: "#FFFAD1",
        grayBackground: "#F5F7FB",
        customViolet: "#4D5B9E",
        textColor: "#293264",
        customGray: "#D6DBF5",
        customGreen: "#94D7A2"
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      screens: {
        tablet: { max: "720px" },
      },
    },
  },
  plugins: [],
};
