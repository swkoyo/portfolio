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
			<div className='text-center text-8xl'>
				{project.name.toUpperCase()}
			</div>
			<div className='mt-8 text-center'>{project.description}</div>
		</div>
	);
};

export default Project;
