/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    minHeight: {
      "2/3": "66vh",
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
