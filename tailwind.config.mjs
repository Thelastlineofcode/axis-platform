/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // AXIS brand palette
        axis: {
          black: '#0a0a0a',
          gold: '#c9a84c',
          'gold-light': '#e8c97e',
          indigo: '#1e1b4b',
          'indigo-mid': '#312e81',
          'indigo-light': '#4338ca',
          cream: '#faf7f0',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
