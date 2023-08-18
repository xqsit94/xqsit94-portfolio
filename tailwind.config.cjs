/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        tamil: ['Anek Tamil', 'sans-serif'],
      },
      boxShadow: {
        'dark-3xl': '.05em .3em .4em hsl(234, 41%, 6%)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.pink.100'),
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
          primary: '#1a725b',
          secondary: '#F6FA70',
          accent: '#FF0060',
          neutral: '#0082df',
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
};
