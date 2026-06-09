import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        gold: { 400: '#D4AF37', 500: '#C9A227', 600: '#B8941F' },
        navy: { 900: '#0A0E1A', 800: '#0D1225', 700: '#111830', 600: '#162040' },
      },
    },
  },
  plugins: [],
}
export default config
