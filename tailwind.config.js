/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footerBg":" url('/src/assets/Mask Group.svg')",
        "dokta":  "url('/src/assets/dokter.png')",
      }
    },
  },
  plugins: [],
}