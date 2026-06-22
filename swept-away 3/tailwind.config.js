/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        carbon: "#141416",
        paper: "#F6F5F2",
        fog: "#8A8A8E",
        smoke: "#6E6E73",
        champagne: "#BBA37E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.42em",
        tight2: "-0.03em",
        tight3: "-0.045em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        prose2: "62ch",
      },
    },
  },
  plugins: [],
};
