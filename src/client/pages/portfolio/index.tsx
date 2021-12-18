import React from 'react';
import { NextPage } from 'next';
import { usePortfolioContext } from '../../context/PortfolioContext';
import ProjectCard from '../../components/ProjectCard';

const TechCarousel = ({ technologies }) => {
	return (
		<div className='w-full p-4 space-x-4 carousel carousel-center bg-neutral rounded-box'>
			{technologies.map((tech, i) => (
				<div key={i} className='carousel-item'>
					<div>{tech.name}</div>
				</div>
			))}
		</div>
	);
};

const Portfolio: NextPage = () => {
	const { projectsData, technologiesData } = usePortfolioContext();

	return (
		<div className='container mx-auto'>
			<TechCarousel technologies={technologiesData} />
			<div className='grid grid-cols-3 gap-4'>
				{projectsData.map((project, i) => (
					<ProjectCard key={i} project={project} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
