/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Dark Mode
        darkBackground: "#292524",
        darkPrimaryText: "#e7e5e4",

        // Light Mode
        lightBackground: "#fffefa",
        lightPrimaryText: "#292524",

        // Global
        subheaderText: "#8c8c8c", // Light accent text as a shade of grey
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
