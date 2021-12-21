import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { usePortfolioContext } from '../../context/PortfolioContext';
import ProjectPage from '../../components/Project/ProjectPage';

const Project: NextPage = () => {
	const router = useRouter();
	const { projectsData } = usePortfolioContext();

	const name = router.query.name;

	const project = projectsData.find((project) => project.name === name);

	return <ProjectPage project={project} />;
};

export default Project;
