import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue: {
          100: '#66BAE6',
          200: '#3AA7E0',
          300: '#5171FD',
        },
        gray: {
          100: '#D9D9D9',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        bebas: ['var(--font-bebas)'],
      },
    },
  },
  plugins: [],
};
export default config;
