import { ComponentType } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { useUserContext } from '../context/UserContext';

const Layout: ComponentType = ({ children }) => {
	const { userData } = useUserContext();

	return (
		<div className='m-5'>
			<Head>
				<title>
					{userData.first_name} {userData.last_name}
				</title>
			</Head>
			<Navbar />
			<main className='mt-10'>{children}</main>
		</div>
	);
};

export default Layout;
