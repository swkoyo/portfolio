import React, { useState } from 'react';
import { NextPage } from 'next';
import { usePortfolioContext } from '../../context/PortfolioContext';
import ProjectCard from '../../components/ProjectCard';
import ProjectForm from '../../components/forms/Project';
import TechnologyForm from '../../components/forms/Technology';

const Portfolio: NextPage = () => {
	const { projectsData, technologiesData } = usePortfolioContext();
	const [show, setShow] = useState(false);
	const [showTech, setShowTech] = useState(false);

	const handleShow = (show) => {
		setShow(show);
	};

	const handleShowTech = (show) => {
		setShowTech(show);
	};

	return (
		<div className='container mx-auto'>
			<div className={`modal ${showTech ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<TechnologyForm handleShow={handleShowTech} />
				</div>
			</div>
			<div className={`modal ${show ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<ProjectForm handleShow={handleShow} />
				</div>
			</div>
			<div className='w-full p-4 space-x-4 carousel carousel-center bg-neutral rounded-box'>
				<div
					key='add'
					className='carousel-item btn bg-green-300'
					onClick={() => handleShowTech(true)}
				>
					add
				</div>
				{technologiesData.map((tech, i) => (
					<div key={i} className='carousel-item'>
						<div>{tech.name}</div>
					</div>
				))}
			</div>
			<div className='grid grid-cols-3 gap-4'>
				{projectsData.map((project, i) => (
					<ProjectCard key={i} project={project} />
				))}
				<div className='card shadow bg-green-300 hover:bg-black hover:cursor-pointer'>
					<div className='card-body' onClick={() => handleShow(true)}>
						Add
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
