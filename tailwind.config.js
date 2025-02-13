/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        border: "var(--color-border)",
        diffcolor: "var(--color-diffcolor)",
        
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
}

