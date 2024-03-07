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
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        ppneue: ["PP Neue Machina", "sans-serif"],
        ppneuebold: ["PP Neue Machina UltraBold", "sans-serif"],
      },
      screens: {
        xsm: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        tablet: "768px",
        ipad: "1024px",
        desktop: "1280px",
        cont: "1025px",
      },
    },
  },
  plugins: [],
};
