import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        exmouth: ['Exmouth', 'serif'],
        crimson: ['var(--font-crimson)', 'serif'],
      },
      colors: {
        pearl: {
          DEFAULT: '#fafafa', // Pearl white at 2% tint
        },
        gold: {
          DEFAULT: '#ae965d', // Gold from save the date foil
        },
        dark: {
          DEFAULT: '#222222', // Very dark gray for text
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/save-the-date.png')",
      },
    },
  },
  plugins: [],
};
export default config; 