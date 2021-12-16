import App, { AppContext, AppProps as NextAppProps } from 'next/app';
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import UserContext, { User } from '../context/UserContext';
import { PortfolioProvider } from '../context/PortfolioContext';
import '../styles/globals.css';
import { useState } from 'react';

interface AppProps extends NextAppProps {
	user: User;
}

const MyApp = ({ Component, pageProps, user }: AppProps) => {
	const [userData, setUserData] = useState(user);
	return (
		<AuthProvider>
			<UserContext.Provider
				value={{ userData, handleUserData: setUserData }}
			>
				<PortfolioProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PortfolioProvider>
			</UserContext.Provider>
		</AuthProvider>
	);
};

// This disables the ability to perform automatic static optimization, causing every page in your app to be server-side rendered.
MyApp.getInitialProps = async (appContext: AppContext) => {
	const res = await fetch('http://localhost:3000/api/user');
	const data = await res.json();

	const appProps = await App.getInitialProps(appContext);

	return { ...appProps, user: data };
};

export default MyApp;
