import { NextComponentType } from 'next';
import Head from 'next/head';
import Navbar from './Navbar';
import { useUserContext } from '../context/UserContext';

const Layout: NextComponentType = ({ children }) => {
	const { userData } = useUserContext();

	return (
		<>
			<Head>
				<title>
					{userData.first_name} {userData.last_name}
				</title>
			</Head>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
