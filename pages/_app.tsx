/* eslint-disable no-unused-vars */
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { type ReactElement, type ReactNode } from 'react';
import { getTheme } from '../config/theme';
import './global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'swkoyo-color-scheme',
		defaultValue: 'dark',
		getInitialValueInEffect: true
	});
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	const getLayout = Component.getLayout ?? ((page) => page);

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
					{getLayout(<Component {...pageProps} />)}
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

export default MyApp;
