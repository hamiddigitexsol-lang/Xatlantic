/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy — used for headings, primary buttons, dark sections
        navy: {
          DEFAULT: '#0B1B33',
          900: '#081321',
          800: '#0F2340',
          700: '#173156',
          600: '#22467A',
          500: '#2F5C98',
        },
        // Clean blue accent for links, highlights, CTAs
        brand: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
          soft: '#EFF4FF',
        },
        ink: '#1E293B', // primary body text on light
        muted: '#64748B', // secondary text
        paper: '#F5F7FA', // light section background
        line: '#E5E9F0', // hairline borders
        gold: '#F5A623', // reserved for star ratings only
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,35,64,0.04), 0 8px 24px -12px rgba(15,35,64,0.12)',
        'card-hover': '0 10px 40px -12px rgba(15,35,64,0.22)',
        float: '0 24px 60px -20px rgba(11,27,51,0.35)',
        'brand-glow': '0 12px 30px -10px rgba(37,99,235,0.45)',
      },
      backgroundImage: {
        'hero-fade': 'radial-gradient(1200px 600px at 85% -10%, #EFF4FF 0%, transparent 60%)',
        'navy-grad': 'linear-gradient(135deg, #0F2340 0%, #081321 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        marquee: 'marquee 32s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
