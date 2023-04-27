import { InferGetStaticPropsType } from 'next';
import { ReactElement } from 'react';
import MainShell from '../components/layouts/MainShell';
import About from '../features/About';
import { BIO, CORE_TECH } from '../features/About/data';
import Experience from '../features/Experience';
import { JOBS } from '../features/Experience/data';
import { NextPageWithLayout } from './_app';

export type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPageWithLayout<HomeProps> = ({ jobs, bio, core_tech }) => {
	return (
		<>
			<About bio={bio} core_tech={core_tech} />
			<Experience jobs={jobs} />
		</>
	);
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <MainShell>{page}</MainShell>;
};

export const getStaticProps = async () => {
	return {
		props: {
			bio: BIO,
			core_tech: CORE_TECH,
			jobs: JOBS
		}
	};
};
