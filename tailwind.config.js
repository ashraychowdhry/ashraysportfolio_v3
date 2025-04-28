/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0a0a16',
          secondary: '#10101e',
          tertiary: '#1a1a2e'
        },
        accent: {
          primary: '#7928ca',
          secondary: '#ff0080',
          tertiary: '#0070f3',
        },
        text: {
          primary: '#ffffff',
          secondary: '#ececec',
          tertiary: '#a0a0a0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};