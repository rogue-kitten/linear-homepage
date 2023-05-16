/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#f7f8f8',
      transparent: "transparent",
      "white-a05": "rgba(255, 255, 255, 0.05)",
      "white-a08": "rgba(255, 255, 255, 0.08)",
      "white-a10": "rgba(255, 255, 255, 0.1)",
      "white-a20": "rgba(255, 255, 255, 0.2)",
      background: "#000212",
      grey: 'rgb(138, 143, 152)',
      'grey-dark': '#222326',
      'off-white': "#d0d6e0",
      "primary-text": "#b4bcd0"
    },
    fontSize: {
      xs: '1.3rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: ['1.8rem', 1.3],
      xl: ['2.2rem', 1.3],
      '2xl': ['2.4rem'],
      '3xl': ['2.6rem'],
      '4xl': ['3.2rem'],
      '5xl': ['4rem'],
      '6xl': ['4.4rem', 1],
      '7xl': ['4.8rem', 1],
      '8xl': ['8rem', 1],
    },
    fontFamily: {
      sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
    },
    spacing: {
      0: '0rem',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4rem',
      11: '4.4rem',
      12: '4.8rem',
      16: '6.4rem'
    },
    backgroundImage: {
      "primary-gradient": 'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
      "page-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent);"
    },
    boxShadow: {
      primary: 'rgba(80, 63, 205, 0.5) 0px 1px 40px'
    }
  },
  plugins: [],
}
