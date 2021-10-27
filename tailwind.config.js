module.exports = {
  // purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "main-texture": "url('/assets/images/Group 11.png')",
        "signup-texture": "url('/assets/images/signup-back.png')",
      },
      height: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        pxl: "600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
