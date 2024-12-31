/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans all JSX files in your project
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
