/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'subtle': '0 1px 6px 0 rgba(0,0,0,0.02)',
      },
      spacing: {
        'mobile': 'var(--mobile-padding)',
        'desktop': 'var(--desktop-padding)',
      },
    },
  },
  plugins: [],
}