import { ComponentType } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout: ComponentType = ({ children }) => {
	return (
		<div className='m-5'>
			<Head>
				<title>{process.env.FULL_NAME}</title>
			</Head>
			<Navbar />
			<main className='mt-10 px-6'>{children}</main>
		</div>
	);
};

export default Layout;
