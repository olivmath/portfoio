/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['18px', '24px'],
      lg: ['30px', '48px'],
      xl: ['60px', '90px']
    }
  },
  plugins: [],
}
