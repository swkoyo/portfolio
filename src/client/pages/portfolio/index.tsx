import React from 'react';
import { NextPage } from 'next';
import ProjectsItems from '../../components/Project/ProjectsItems';
import TechnologyGrid from '../../components/Technology/TechnologyGrid';

const Portfolio: NextPage = () => {
	return (
		<div className='grid md:grid-cols-3 gap-4 mx-auto w-full max-w-7xl auto-rows-fr'>
			<div className='md:row-span-2'>
				<TechnologyGrid />
			</div>
			<ProjectsItems />
		</div>
	);
};

export default Portfolio;
