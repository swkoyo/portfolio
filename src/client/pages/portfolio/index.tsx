import React, { useState } from 'react';
import { NextPage } from 'next';
import { usePortfolioContext } from '../../context/PortfolioContext';
import ProjectCard from '../../components/ProjectCard';
import ProjectForm from '../../components/forms/Project';

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
	const [show, setShow] = useState(false);

	const handleShow = (show) => {
		setShow(show);
	};

	return (
		<div className='container mx-auto'>
			<TechCarousel technologies={technologiesData} />
			<div className='grid grid-cols-3 gap-4'>
				{projectsData.map((project, i) => (
					<ProjectCard key={i} project={project} />
				))}
				<div className='card shadow bg-green-300 hover:bg-black hover:cursor-pointer'>
					<div className='card-body' onClick={() => handleShow(true)}>
						Add
					</div>
					<div className={`modal ${show ? 'modal-open' : null}`}>
						<div className='modal-box'>
							<ProjectForm handleShow={handleShow} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
