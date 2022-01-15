module.exports = {
	mode: 'jit',
	content: [
		'./src/client/pages/**/*.{js,ts,jsx,tsx}',
		'./src/client/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography')
	]
};
