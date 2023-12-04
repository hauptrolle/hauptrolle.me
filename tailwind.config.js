/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.semibold"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
