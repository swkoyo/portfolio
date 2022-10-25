import { CacheProvider, EmotionCache } from '@emotion/react';
import '@fontsource/montserrat/100.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';
import './global.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps
	} = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Brandon Kim | Full Stack Web Developer</title>
				<meta
					name='viewport'
					content='initial-scale=1, width=device-width'
				/>
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<ThemeProvider theme={theme}>
				<SnackbarProvider maxSnack={3} autoHideDuration={2000}>
					<CssBaseline />
					<Component {...pageProps} />
				</SnackbarProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
