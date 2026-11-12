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
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0B1B33',
          900: '#07142A',
          800: '#0B1B33',
          700: '#16294A',
          600: '#2A3D5F',
        },
        paper: {
          DEFAULT: '#F7F5F0',
          dim: '#EFECE4',
        },
        gold: {
          DEFAULT: '#B8913A',
          light: '#D9BC72',
        },
        rule: '#DCD7CB',
        // hairline grid on the dark page
        line: 'rgba(247, 245, 240, 0.09)',
        muted: '#5B6577',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        site: '1240px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
