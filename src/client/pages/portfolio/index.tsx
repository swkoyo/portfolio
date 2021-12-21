import React from 'react';
import { NextPage } from 'next';
import ProjectsGrid from '../../components/Project/ProjectsGrid';
import TechnologyCarousel from '../../components/Technology/TechnologyCarousel';

const Portfolio: NextPage = () => {
	return (
		<div className='container mx-auto'>
			<TechnologyCarousel />
			<ProjectsGrid />
		</div>
	);
};

export default Portfolio;
