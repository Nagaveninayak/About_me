module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    extend: {
      backgroundImage: {
        mondstadt: "url('/images/mondstadt.jpg')",
      },
      colors: {
        cardGreen: "#4f7d75",
        cardDarkGreen: "#236e61",
        brownHover: "#ffd97c",
        greenGrey: "#064d4b",
        buttonInital: "#183e3f",
        buttonHover: "#0f1f1f",
        buttonHover1: "#89a7a3",
        goldenColor: "#CCC2BC",
        tableBorder: "#96aba4",
        tableBg: "#3c5f5b",
        tableText: "#c3dfd5",
        attdivider: "#045656",
      },
    },
  },
  plugins: [],
};
