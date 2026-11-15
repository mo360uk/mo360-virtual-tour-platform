/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        brand: {
          ochre: '#C87D28',
          'ochre-light': '#E09B4B',
          'ochre-dark': '#9E601B',
          ink: '#0F172A',
          slate: '#1E293B',
          mist: '#F8FAFC',
          emerald: '#10B981'
        }
      }
    }
  },
  plugins: []
};
