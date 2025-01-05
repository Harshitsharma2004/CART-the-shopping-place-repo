module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Matches all JS/TS/JSX/TSX files in the src directory
  ],
  theme: {
    fontFamily: {
      primary: "Poppins, sans-serif", // Ensure a fallback font
    },
    container: {
      center: true, // Center the container for consistent layout
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: { // Fixed `extends` to `extend`
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
        login: '#9E8B73', // Green or your desired primary color
        sign:'#B7999C',

        'primary-dark': '#388E3C', // Darker shade for hover effect
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
        hero2: "url('./img/hero.png')",
        heroMobile: "url('./img/heroMobile.png')"
      },
    },
  },
  plugins: [],
};
