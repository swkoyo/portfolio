import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import ProjectsItems from '../../components/Project/ProjectsItems';
import TechnologyGrid from '../../components/Technology/TechnologyGrid';

const Portfolio: NextPage = ({
	projects,
	technologies
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className='grid md:grid-cols-3 gap-4 mx-auto w-full max-w-7xl auto-rows-fr'>
			<div className='md:row-span-2'>
				<TechnologyGrid technologies={technologies} />
			</div>
			<ProjectsItems projects={projects} />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const projectsRes = await fetch(`${process.env.API_URL}/projects`);
	const projects = await projectsRes.json();

	const technologiesRes = await fetch(`${process.env.API_URL}/technologies`);
	const technologies = await technologiesRes.json();

	return {
		props: {
			projects,
			technologies
		}
	};
};

export default Portfolio;
