/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        redhot: '#FF165D',
      },

      backgroundImage: (theme) => ({
        'gradient-rainblue':
          'linear-gradient(176deg, rgba(0,255,185,1) 0%, rgba(192,0,255,1) 52%, rgba(190,48,246,1) 60%, rgba(0,255,205,1) 100%)',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    prefix: 'tw-',
    important: true,
  },
  plugins: [],
};
