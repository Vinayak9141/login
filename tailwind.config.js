module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9f9f9",
          100: "#f5f5f5",
          "50_99": "#f9f9f999",
          "50_7e": "#f9f9f97e",
        },
        black: {
          900: "#000000",
          "900_7e": "#0000007e",
          "900_87": "#00000087",
          "900_01": "#030406",
          "900_66": "#00000066",
          "900_99": "#00000099",
        },
        blue_gray: { 100: "#cbe4e8" },
        red: { 600: "#db4444" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
