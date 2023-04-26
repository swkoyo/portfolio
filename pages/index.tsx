import { ReactElement } from 'react';
import MainShell from '../components/layouts/MainShell';
import About from '../features/About';
import Experience from '../features/Experience';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
	return (
		<>
			<About />
			<Experience />
		</>
	);
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <MainShell>{page}</MainShell>;
};
