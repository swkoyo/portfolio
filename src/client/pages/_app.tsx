import App, { AppProps, AppContext } from 'next/app';
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import { UserProvider } from '../context/UserContext';
import { PortfolioProvider } from '../context/PortfolioContext';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<AuthProvider>
			<UserProvider>
				<PortfolioProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PortfolioProvider>
			</UserProvider>
		</AuthProvider>
	);
};

// This disables the ability to perform automatic static optimization, causing every page in your app to be server-side rendered.
MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

export default MyApp;
