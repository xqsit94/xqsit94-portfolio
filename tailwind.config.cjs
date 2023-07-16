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
          primary: '#22a094',
          secondary: '#F1C93B',
          accent: '#FC2947',
          neutral: '#0082df',
        },
      },
    ],
  },
};
