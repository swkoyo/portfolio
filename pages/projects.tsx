import { InferGetStaticPropsType } from 'next';
import { ReactElement } from 'react';
import MainShell from '../components/layouts/MainShell';
import { TECH } from '../constants';
import Projects from '../features/Projects';
import { PROJECTS } from '../features/Projects/data';
import { NextPageWithLayout } from './_app';

export type ProjectsProps = InferGetStaticPropsType<typeof getStaticProps>;

const ProjectsPage: NextPageWithLayout<ProjectsProps> = ({
	projects,
	tech_data
}) => {
	return <Projects projects={projects} tech_data={tech_data} />;
};

export default ProjectsPage;

ProjectsPage.getLayout = function getLayout(page: ReactElement) {
	return <MainShell>{page}</MainShell>;
};

export const getStaticProps = async () => {
	return {
		props: {
			projects: PROJECTS,
			tech_data: (Object.values(TECH) as Array<keyof typeof TECH>).map(
				(key) => ({
					value: key,
					label: key
				})
			)
		}
	};
};
