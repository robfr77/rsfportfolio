/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    minHeight: {
      "1/2": "50vh",
    },
    extend: {
      transitionProperty: {
        bottom: "bottom",
        top: "top",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
