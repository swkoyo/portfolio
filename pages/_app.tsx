import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { getTheme } from '../config/theme';
import './global.css';

function MyApp(props: AppProps) {
	const { Component, pageProps } = props;
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'swkoyo-color-scheme',
		defaultValue: 'dark',
		getInitialValueInEffect: true
	});
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<>
			<Head>
				<title>Brandon Kim | Full Stack Web Developer</title>
				<meta
					name='viewport'
					content='initial-scale=1, width=device-width'
				/>
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={getTheme(colorScheme)}
				>
					<Component {...pageProps} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

export default MyApp;
