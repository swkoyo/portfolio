import { ComponentType } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { FULL_NAME } from '../config';
import { useUserContext } from '../context/UserContext';

const Layout: ComponentType = ({ children }) => {
	// const { userData } = useUserContext();

	return (
		<div className='m-5'>
			<Head>
				<title>{FULL_NAME}</title>
			</Head>
			<Navbar />
			<main className='mt-10 px-6'>{children}</main>
		</div>
	);
};

export default Layout;
