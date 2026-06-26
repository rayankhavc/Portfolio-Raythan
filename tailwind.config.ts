import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        syne: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#C8FF00',
      },
      borderColor: {
        DEFAULT: 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
