/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Keep this as is if you don't want Tailwind's base styles
  },
  plugins: [],
};
