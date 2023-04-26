import { ReactElement } from 'react';
import MainShell from '../components/layouts/MainShell';
import Projects from '../features/Projects';
import { NextPageWithLayout } from './_app';

const ProjectsPage: NextPageWithLayout = () => {
	return <Projects />;
};

export default ProjectsPage;

ProjectsPage.getLayout = function getLayout(page: ReactElement) {
	return <MainShell>{page}</MainShell>;
};
