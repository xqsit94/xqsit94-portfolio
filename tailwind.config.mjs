/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        tamil: ['Anek Tamil', 'sans-serif'],
      },
      boxShadow: {
        'blur-3xl': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: 'rgba(255,0,96,0.04)',
              fontWeight: '500',
              padding: '0.25rem',
              borderRadius: '0.25rem !important',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          color: '#1c1e2b',
          primary: '#fbfffb',
          secondary: '#2ecc71',
          accent: '#e74c3c',
          neutral: '#fff7f7',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          color: '#d1d5db',
          'base-100': '#1c1e2b',
          'base-200': '#373b56',
          primary: '#20232d',
          accent: '#F2B807',
          secondary: '#F24968',
          neutral: '#23253b',
        },
      },
    ],
  },
}
