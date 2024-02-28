/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-1': '#513c06',
        'primary-2': '#7a5c10',
        'primary-3': '#a27c1a',
        'primary-4': '#c8992d',
        'primary-5': '#e9b949',
        'primary-6': '#f7d06e',
        'primary-7': '#f9da8b',
        'primary-8': '#f8e3a5',
        'primary-9': '#fceec5',
        'primary-10': '#fffaeb',
        'grey-1': '#102a42',
        'grey-2': '#243a52',
        'grey-3': '#324d67',
        'grey-4': '#48647f',
        'grey-5': '#617d98',
        'grey-6': '#829ab0',
        'grey-7': '#9eb2c7',
        'grey-8': '#bcccdc',
        'grey-9': '#dae2ec',
        'grey-10': '#f1f5f8',
      },

      fontFamily: {
        primary: ['Public Sans', 'sans-serif'],
        secondary: ['Nunito Sans', 'sans-serif'],
      },

      fontSize: {
        10: '10px',
        20: '20px',
        30: '30px',
        40: '40px',
        50: '50px',
        60: '60px',
        70: '70px',
        80: '80px',
        90: '90px',
        100: '100px',
      },
    },
  },
  plugins: [],
}
