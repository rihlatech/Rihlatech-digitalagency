export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#2563EB',
        accent: '#3B82F6',
        surface: '#0F172A',
        text: '#F8FAFC',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.18)',
        glow: '0 20px 80px rgba(37, 99, 235, 0.22)',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
