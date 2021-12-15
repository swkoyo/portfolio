module.exports = {
	mode: 'jit',
	purge: './src/client/**/*.{js,ts,jsx,tsx}',
	content: [
		'./src/client/pages/**/*.{js,ts,jsx,tsx}',
		'./src/client/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
