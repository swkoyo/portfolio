import { ComponentType } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout: ComponentType = ({ children }) => {
	return (
		<div>
			<Head>
				<title>{process.env.FULL_NAME}</title>
			</Head>
			<main>
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default Layout;
