/** @type {import('tailwindcss').Config} */
let plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#39C198',
        red: '#FF6F6F',
        dark: '#191919',
        blue: '#6E7DFF',
        primary: '#373644',
        gray: {
          0: '#9695A5',
          1: '#3C3A49',
          2: '#424554',
          3: '#EBEBEB',
          4: '#797C87',
        },
        message: {
          0: '#285885',
          1: '#0A3F70',
        },
        transparent: 'rgba(0,0,0,0.2)',
      },
      screens: {
        xs: '0px',
        sm: '577px',
        md: '632px',
        lg: '993px',
        gl: '1024px',
        xl: '1201px',
      },
      spacing: {
        100: '400px',
        105: '420px',
        125: '500px',
        200: '800px',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, addBase, theme }) {
      addVariant('second', '&:nth-child(2)');
      addBase({
        '.scrollbar::-webkit-scrollbar': {
          height: '4px',
          width: '4px',
          backgroundColor: theme('colors.gray-0'),
          borderRadius: '8px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: 'red',
          borderRadius: '8px',
        },
        '#root': {
          height: '100vh',
        },
      });
    }),
  ],
};
