import App, { AppContext, AppProps as NextAppProps } from 'next/app';
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import { UserProvider } from '../context/UserContext';
import { PortfolioProvider } from '../context/PortfolioContext';
import { User, Project, Technology } from '../models';
import '../styles/globals.css';

interface AppProps extends NextAppProps {
	user: User;
	projects: Project[];
	technologies: Technology[];
}

const MyApp = ({
	Component,
	pageProps,
	user,
	projects,
	technologies
}: AppProps) => {
	return (
		<AuthProvider>
			<UserProvider user={user}>
				<PortfolioProvider
					projects={projects}
					technologies={technologies}
				>
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
	const userRes = await fetch('http://localhost:3000/api/user');
	const user = await userRes.json();

	const projectsRes = await fetch('http://localhost:3000/api/projects');
	const projects = await projectsRes.json();

	const technologiesRes = await fetch(
		'http://localhost:3000/api/technologies'
	);
	const technologies = await technologiesRes.json();

	const appProps = await App.getInitialProps(appContext);

	return { ...appProps, user, projects, technologies };
};

export default MyApp;
