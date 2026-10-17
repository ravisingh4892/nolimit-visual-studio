module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#d1fe17',
        brand: '#d1fe17',
        text: '#f7f7f8',
        accent: '#1c1e21',
        surface: '#000000',
        background: '#1c1e21'
      },
      boxShadow: {
        neon: '0 0 8px #d1fe17, 0 0 24px #d1fe17',
        glass: '0 2px 8px rgba(209, 254, 23, 0.08)'
      },
      borderRadius: {
        lg: '1rem',
        xl: '1.5rem'
      }
    }
  },
  plugins: []
}
