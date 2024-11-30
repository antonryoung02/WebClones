const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['EmberLight', ...defaultTheme.fontFamily.sans], // Set your custom font as the default sans-serif
        semibold: ['EmberMedium', 'sans-serif'],
        bold: ['EmberBold', 'sans-serif'], // Define a custom utility class

      },
    },
  },
  plugins: [    
    require('@tailwindcss/line-clamp'),
  ],
};
