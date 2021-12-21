import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { usePortfolioContext } from '../../context/PortfolioContext';

const Project: NextPage = () => {
	const router = useRouter();
	const { projectsData } = usePortfolioContext();

	const name = router.query.name;

	const project = projectsData.find((project) => project.name === name);

	return (
		<div className='container mx-auto'>
			<div className='text-center text-8xl uppercase'>{project.name}</div>
			<div className='mt-8 text-center'>{project.description}</div>
		</div>
	);
};

export default Project;
