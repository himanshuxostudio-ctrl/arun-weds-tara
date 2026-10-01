/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F6EFE3',
          deep: '#EFE5D4',
          paper: '#FAF5EB',
        },
        blush: {
          DEFAULT: '#F0DCD9',
          soft: '#F6E8E4',
          deep: '#E2C2BE',
        },
        rose: {
          dusty: '#BD8A8A',
          deep: '#8A3F3E',
        },
        plum: {
          DEFAULT: '#531C32',
          deep: '#3B1424',
          light: '#6C2B44',
        },
        sage: {
          DEFAULT: '#8C9A7B',
          deep: '#6F7D5E',
          soft: '#B7C0A8',
        },
        gold: {
          DEFAULT: '#B4914F',
          soft: '#CBAD76',
          deep: '#8F7138',
        },
        charcoal: {
          DEFAULT: '#2B2420',
          soft: '#473E36',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Parisienne"', 'cursive'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.82' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(220deg)', opacity: '0' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(10px, -14px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        flicker: 'flicker 3.2s ease-in-out infinite',
        petalFall: 'petalFall 14s linear infinite',
        driftSlow: 'driftSlow 8s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
      boxShadow: {
        card: '0 10px 40px -10px rgba(43, 36, 32, 0.25)',
        gold: '0 0 0 1px rgba(180, 145, 79, 0.35)',
      },
    },
  },
  plugins: [],
}
