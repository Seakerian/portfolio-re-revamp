/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "25% 0%" },
          "50%": { backgroundPosition: "25% 75%" },
          "100%": { backgroundPosition: "25% 0%" },
        },
      },
      backgroundSize: {
        "gradient-size": "200% 200%",
      },
      animation: {
        gradient_shift: "gradientShift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
