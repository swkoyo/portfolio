import React from 'react';
import { NextPage } from 'next';
import ProjectsGrid from '../../components/Project/ProjectsItems';
import TechnologyGrid from '../../components/Technology/TechnologyGrid';

const Portfolio: NextPage = () => {
	return (
		<div className='grid grid-cols-3 gap-4'>
			<div className='row-span-2'>
				<TechnologyGrid />
			</div>
			<ProjectsGrid />
		</div>
	);
};

export default Portfolio;
