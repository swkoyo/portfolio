import React, { useState } from 'react';
import { NextPage } from 'next';
import { usePortfolioContext } from '../../context/PortfolioContext';
import { useAuthContext } from '../../context/AuthContext';
import ProjectCard from '../../components/ProjectCard';
import ProjectForm from '../../components/forms/Project';
import TechnologyForm from '../../components/forms/Technology';
import cookieCutter from 'cookie-cutter';

const deleteTechnology = async (name: string) => {
	await fetch(
		`http://localhost:3000/api/technologies?name=${encodeURIComponent(
			name
		)}`,
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			}
		}
	);
};

const Portfolio: NextPage = () => {
	const { projectsData, technologiesData, refreshData } =
		usePortfolioContext();
	const [show, setShow] = useState(false);
	const [showTech, setShowTech] = useState(false);
	const { auth } = useAuthContext();

	const handleShow = (show) => {
		setShow(show);
	};

	const handleShowTech = (show) => {
		setShowTech(show);
	};

	const handleDeleteTech = async (name) => {
		await deleteTechnology(name);
		await refreshData();
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
				{auth ? (
					<div
						key='add'
						className='carousel-item btn bg-green-300'
						onClick={() => handleShowTech(true)}
					>
						add
					</div>
				) : null}
				{technologiesData.map((tech, i) => (
					<div key={i} className='carousel-item relative'>
						<div className='btn btn-primary'>{tech.name}</div>
						{auth ? (
							<div className='absolute top-0 right-0'>
								<div
									className='btn btn-xs btn-circle btn-error'
									onClick={() => handleDeleteTech(tech.name)}
								>
									X
								</div>
							</div>
						) : null}
					</div>
				))}
			</div>
			<div className='grid grid-cols-3 gap-4'>
				{auth ? (
					<div className='card shadow bg-green-300 hover:bg-black hover:cursor-pointer'>
						<div
							className='card-body'
							onClick={() => handleShow(true)}
						>
							Add
						</div>
					</div>
				) : null}
				{projectsData.map((project, i) => (
					<ProjectCard key={i} project={project} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
