import React from 'react';
import { NextPage } from 'next';
import { usePortfolioContext } from '../context/PortfolioContext';
import ProjectCard from '../components/ProjectCard';

const Portfolio: NextPage = () => {
	const { projectsData } = usePortfolioContext();

	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-3 gap-4'>
				{projectsData.map((project, i) => (
					<ProjectCard key={i} project={project} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
