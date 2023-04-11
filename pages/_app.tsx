import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../config/theme';
import './global.css';

function MyApp(props: AppProps) {
	const { Component, pageProps } = props;

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
			<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
				<Component {...pageProps} />
			</MantineProvider>
		</>
	);
}

export default MyApp;
