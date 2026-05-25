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
        accent: '#C9A532',
        'accent-tint': '#FAF0D7',
        ink: '#0A0A0A',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['var(--font-dancing)', 'cursive'],
      },
      fontSize: {
        display: ['clamp(4rem,12vw,12rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-md': ['clamp(2.5rem,7vw,7rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-sm': ['clamp(2rem,5vw,4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
