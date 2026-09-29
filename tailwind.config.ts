import type { Config } from 'tailwindcss';
import { brandTheme } from './src/theme/brand';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: brandTheme.colors,
      fontFamily: {
        heading: [...brandTheme.fonts.heading],
        body: [...brandTheme.fonts.body],
      },
      boxShadow: {
        card: '0 14px 35px rgba(27, 31, 36, 0.08)',
      },
      maxWidth: {
        site: '80rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
