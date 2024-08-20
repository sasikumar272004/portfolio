const { Spirax } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        spirax:[ "Spirax", "system-ui"],
        baro:[ "Barrio", "system-ui"],
        pr:[   "Press Start 2P", "system-ui"],
        unco:[ "Uncial Antiqua", "system-ui"],
        buda:["Buda", "serif"],
        amar:["Amarante", "serif"],
        gal:[ "Galindo", "sans-serif"],
        moli:[ "Mooli", "sans-serif"],
        ori:[ "Original Surfer", "sans-serif"],

        
     
      },
    },
  },
  plugins: [],
};
