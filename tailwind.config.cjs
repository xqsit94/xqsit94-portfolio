/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require("daisyui")],
	daisyui: {
		themes: [
			{
				'light': {
					...require('daisyui/src/theming/themes')["[data-theme=light]"],
					"primary": "#0079FF",
					"secondary": "#F6FA70",
					"accent": "#FF0060",
					"neutral": "#00DFA2",
				},
			}
		]
	},
}
