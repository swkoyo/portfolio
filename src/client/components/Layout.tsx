import { NextComponentType } from 'next';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout: NextComponentType = ({ children }) => {
	return (
		<>
			<Head>
				<title>My Portfolio</title>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
