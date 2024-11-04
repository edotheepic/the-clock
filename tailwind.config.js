/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(4rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0rem)",
          },
        },
        float: {
          "0%": {
            transform: "translateY(0rem)",
          },
          "50%": {
            transform: "translateY(1rem)",
          },
          "100%": {
            transform: "translateY(0rem)",
          },
        }
      },
      animation: {
        appear: "appear 1s ease-in-out forwards var(--delay, 0)",
        float: "float 5s ease-in-out infinite var(--delay, 0)"
      },
    },
  },
  plugins: [],
}

