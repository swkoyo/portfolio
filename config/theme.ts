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
	primaryColor: 'teal'
});
