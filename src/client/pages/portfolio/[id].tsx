import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { usePortfolioContext } from '../../context/PortfolioContext';

const Project: NextPage = () => {
	const router = useRouter();
	const { projectsData } = usePortfolioContext();

	const id = parseInt(router.query.id as string);

	const project = projectsData.find((project) => project.id === id);

	return (
		<div className='container mx-auto'>
			{project ? JSON.stringify(project) : 'Project Not Found'}
		</div>
	);
};

export default Project;
