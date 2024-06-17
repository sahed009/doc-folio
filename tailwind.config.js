/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
      '3xl' : '2000px',
    },
    extend: {
      colors: {
        primary: '#E63946',
        secondary: '#D62828',
        background: '#FFFFFF',
        text: '#000000',
        accent: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


