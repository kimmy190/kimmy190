/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkbrown:' #1E1E16', 
        brown: '#36342E', 
        beige: '#F0EADD', 
        seablue: '#BADDD9', 

      },
      fontFamily: {
        sans: ['Dosis', 'sans-serif'], // Set Dosis as the default font
      },
    },
  },
  plugins: [],
};
