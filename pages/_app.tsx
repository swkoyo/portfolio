import type { AppProps } from 'next/app';
import Head from 'next/head';
import './global.css';
import { MantineProvider } from '@mantine/core';

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
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: 'dark'
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</>
	);
}

export default MyApp;
