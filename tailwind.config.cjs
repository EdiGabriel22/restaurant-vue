const { extend } = require('@vue/shared')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary:  {
				'50':  '#fdfcfb',
				'100': '#fcefef',
				'200': '#f9cadf',
				'300': '#f19bbe',
				'400': '#f16a99',
				'500': '#ff2351',
				'600': '#d52e5a',
				'700': '#b12341',
				'800': '#84192a',
				'900': '#531016',
				},
				secondary: {
				'50':  '#faf9f1',
				'100': '#f8efa9',
				'200': '#fdc844',
				'300': '#d7bc3c',
				'400': '#b0931e',
				'500': '#8e760e',
				'600': '#735d09',
				'700': '#594609',
				'800': '#3d3008',
				'900': '#2a1e07',
				},
				dark: {
				'50':  '#f9f9f8',
				'100': '#f0f0f1',
				'200': '#dddde0',
				'300': '#b9babe',
				'400': '#848484',
				'500': '#717071',
				'600': '#5b5555',
				'700': '#464040',
				'800': '#302b2d',
				'900': '#1d1b1d',
				},
				gray: {
				'50':  '#f8f9f8',
				'100': '#f0eff0',
				'200': '#dadada',
				'300': '#bcb7be',
				'400': '#959097',
				'500': '#786f75',
				'600': '#625459',
				'700': '#4c3f44',
				'800': '#342c30',
				'900': '#211c1f',
				},
				
			},

			fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans]
            },
		},
		container: {
			padding: '2rem',
		},
	},
	plugins: [require('tailwind-bootstrap-grid')()],
}
