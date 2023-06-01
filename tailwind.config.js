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
      "white-a15": "rgba(255, 255, 255, 0.15)",
      "white-a20": "rgba(255, 255, 255, 0.2)",
      "white-a50": "rgba(255, 255, 255, 0.5)",
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
      '8xl': ['5.6rem', 1],
      '9xl': ['8rem', 1],
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
      14: '5.6rem',
      15: '6rem',
      16: '6.4rem'
    },
    aspectRatio: {
      '1/0.7': '1 / 0.7'
    },
    backgroundImage: {
      "primary-gradient": 'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
      "page-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent);",
      "hero-gradient": "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent);",
      "hero-glow": "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
      "glow-lines": "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
      "sunrise-gradient": 'radial-gradient(circle at bottom center,var(--color),transparent 70%);',
      "usp-gradient": "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%);",
      "usp-gradient-2": "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.07));",
      "feature-image": "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 120%)",
      "feature-image2": "radial-gradient(ellipse 50% 50% at center,rgba(var(--feature-color),0.1),transparent)",
      "feature-cards": "radial-gradient(ellipse at center,rgba(var(--feature-color),0.15), transparent)",
      "feature-cards-mobile": "radial-gradient(ellipse at 50% 80%,rgba(var(--feature-color),0.15),transparent)",
      "feature-cards2": "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
      "feature": "radial-gradient(ellipse 100% 40% at 50% 60%,rgba(var(--feature-color),0.1),transparent)",
      "feature-divider": "conic-gradient(from 90deg at 80% 50%,#000212,var(--feature-color))",
      "integrations": "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 120%)",
      "integrations2": 'linear-gradient(rgba(108, 56, 255, 0.3) 0%, rgba(139, 98, 255, 0.3) 100%)',
      "ripple-gradient": "linear-gradient(90deg, rgb(21, 11, 48) 0%, rgb(91, 57, 184) 100%);"
    },
    boxShadow: {
      primary: 'rgba(80, 63, 205, 0.5) 0px 1px 40px'
    },
    keyframes: {
      "fade-in": {
        from: { opacity: 0, transform: "translateY(-10px)" },
        to: { opacity: 1, transform: "none" },
      },
      "image-rotate": {
        "0%": { transform: "rotateX(25deg)" },
        "25%": { transform: "rotateX(25deg) scale(0.9)" },
        "60%": { transform: "none" },
        "100%": { transform: "none" },
      },
      "image-glow": {
        "0%": {
          opacity: 0,
          'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)'
        },
        "10%": {
          opacity: 1,
          'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)'
        },
        '100%': {
          opacity: 0.2
        }
      },
      "sketch-lines": {
        "0%": {
          "stroke-dashoffset": 1
        },
        "50%": {
          "stroke-dashoffset": 0
        },
        "99%": {
          "stroke-dashoffset": 0
        },
        "100%": {
          visibility: "hidden"
        },
      },
      "glow-lines-horizontal": {
        "0%": {
          opacity: 0,
          transform: "translateX(0)"
        },
        "5%": {
          opacity: 1,
          transform: "translateX(0)"
        },
        "80%": {
          opacity: 1,
        },
        "100%": {
          opacity: 0,
          transform: "translateX(45rem)"
        },
      },
      "glow-lines-vertical": {
        "0%": {
          opacity: 0,
          transform: "translateY(0)"
        },
        "5%": {
          opacity: 1,
          transform: "translateY(0)"
        },
        "80%": {
          opacity: 1,
        },
        "100%": {
          opacity: 0,
          transform: "translateY(45rem)"
        },
      },
      "thunder": {
        "0%, 9%, 11%, 100%": {
          fill: "transparent"
        },
        "10%": {
          fill: "white"
        }
      },
      "ripple": {
        "0%": {
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.9)"
        },
        "40%, 50%": {
          opacity: 'var(--opacity)',
          transform: "translate(-50%, -50%) scale(1)"
        },
        "100%": {
          opacity: 0,
        },
      }
    },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      "image-rotate": "image-rotate 1400ms ease forwards",
      'image-glow': "image-glow 4100ms 600ms ease-out forwards",
      "sketch-lines": "sketch-lines 1200ms ease-out forwards",
      "glow-lines-horizontal": "glow-lines-horizontal var(--duration) forwards",
      "glow-lines-vertical": "glow-lines-vertical var(--duration) forwards",
      "thunder": "thunder 2250ms calc(var(--index) * 20ms) linear infinite",
      "ripple": "ripple 3400ms calc(500ms + (var(--delay))) ease infinite backwards"
    }
  },
  plugins: [],
}

