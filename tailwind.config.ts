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
      'sans': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {
      backgroundImage: {
        'mondstadt': "url('/images/mondstadt.jpg')",
      },
      colors: {
        'cardGreen': '#4f7d75',
        'cardDarkGreen': '#236e61'
      }
    },
  },
  plugins: [],
}