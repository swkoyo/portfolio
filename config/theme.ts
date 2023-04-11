import { MantineThemeOverride } from '@mantine/core';
import '@fontsource/montserrat';

const theme: MantineThemeOverride = {
	colorScheme: 'dark',
	fontFamily: 'Montserrat, sans-serif',
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
		]
	},
	primaryColor: 'brand'
};

export default theme;
