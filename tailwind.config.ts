import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#147ec7',
        secondary: '#19326A',
        accent: '#75c4f9',
        dark: '#081120',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
