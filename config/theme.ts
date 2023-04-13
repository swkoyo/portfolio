import { ColorScheme, MantineThemeOverride } from '@mantine/core';
import '@fontsource/montserrat';

export const getTheme = (colorScheme: ColorScheme): MantineThemeOverride => ({
	colorScheme,
	fontFamily: 'Montserrat, sans-serif',
	fontSizes: {
		xs: '0.6rem',
		sm: '0.75rem',
		md: '0.9rem',
		lg: '1rem',
		xl: '1.2rem',
		'2xl': '1.4rem'
	},
	colors: {
		brand: [
			'#edf7f7',
			'#cae7e6',
			'#a7d7d6',
			'#84c7c5',
			'#61b8b5',
			'#479e9b',
			'#387b79',
			'#285856',
			'#183534',
			'#081211'
		],
		secondary: [
			'#fef4e6',
			'#fdddb4',
			'#fcc783',
			'#fbb051',
			'#f99a1f',
			'#e08106',
			'#ae6404',
			'#7c4703',
			'#4b2b02',
			'#190e01'
		]
	},
	primaryColor: 'brand'
});
