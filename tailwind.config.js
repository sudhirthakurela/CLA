/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50:  '#fff1ef',
          100: '#ffe0da',
          200: '#ffc5ba',
          300: '#ff9f8e',
          400: '#ff6b52',
          500: '#ff4422',
          600: '#ed2a09',
          700: '#c82008',
          800: '#a51f0f',
          900: '#882014',
        },
        teal: {
          50:  '#edfafa',
          100: '#d5f5f6',
          200: '#afecee',
          300: '#7edce2',
          400: '#16bdca',
          500: '#0694a2',
          600: '#047481',
          700: '#036672',
          800: '#05505c',
          900: '#014451',
        },
        sunshine: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
        },
        brand: {
          coral:   '#FF6B47',
          teal:    '#2EC4B6',
          yellow:  '#FFCB47',
          purple:  '#9B5DE5',
          pink:    '#FF8FAB',
          green:   '#06D6A0',
        },
      },
      fontFamily: {
        display: ['"Nunito"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'soft':  '0 4px 24px rgba(0,0,0,0.07)',
        'card':  '0 8px 32px rgba(0,0,0,0.10)',
        'pop':   '0 16px 48px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
