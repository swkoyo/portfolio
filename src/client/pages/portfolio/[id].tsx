import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { usePortfolioContext } from '../../context/PortfolioContext';
import ProjectPage from '../../components/Project/ProjectPage';

const Project: NextPage = () => {
	const router = useRouter();
	const { projectsData } = usePortfolioContext();

	const id = router.query.id;

	const project = projectsData.find(
		(project) => project.id === parseInt(id as string)
	);

	return <ProjectPage project={project} />;
};

export default Project;
