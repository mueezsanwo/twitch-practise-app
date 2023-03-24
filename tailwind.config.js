/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // @media (min-width: 640px)

      md: '760px',
      // @media (min-width: 760px)

      lg: '1026px',
      // @media (min-width: 1028px)

      xl: '1200px',
      // @media (min-width: 1200px)

      '2xl': '1600px',
      // @media (min-width: 1600px)

      '3xl': '1800px',
      // @media (min-width: 1800px)
    }
  },
  plugins: [],
}
