import { NextComponentType } from 'next';
import Navbar from './Navbar';

const Layout: NextComponentType = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
