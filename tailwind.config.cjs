/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
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
    ],
  },
};
