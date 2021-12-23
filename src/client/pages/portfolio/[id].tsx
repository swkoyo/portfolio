import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { usePortfolioContext } from '../../context/PortfolioContext';
import ProjectPage from '../../components/Project/ProjectPage';

const Project: NextPage = () => {
	const router = useRouter();
	const { projectsData } = usePortfolioContext();
	const [project, setProject] = useState(null);

	useEffect(() => {
		const id = parseInt(router.query.id as string);
		const project = projectsData.find((project) => project.id === id);

		if (!project) {
			alert('Project not found');
			router.push('/portfolio');
		} else {
			setProject(project);
		}
	}, []);

	return project ? <ProjectPage project={project} /> : <></>;
};

export default Project;
