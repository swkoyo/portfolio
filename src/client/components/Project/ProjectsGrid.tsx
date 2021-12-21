import { ComponentType, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import { usePortfolioContext } from '../../context/PortfolioContext';
import { useAuthContext } from '../../context/AuthContext';

const ProjectsGrid: ComponentType = () => {
	const { auth } = useAuthContext();
	const { projectsData } = usePortfolioContext();
	const [showFormModal, setShowFormModal] = useState(false);

	const handleShowFormModal = (show: boolean) => {
		setShowFormModal(show);
	};

	return (
		<>
			<div className={`modal ${showFormModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<ProjectForm handleShow={handleShowFormModal} />
				</div>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				{auth ? (
					<div className='card shadow bg-green-300 hover:bg-black hover:cursor-pointer'>
						<div
							className='card-body'
							onClick={() => handleShowFormModal(true)}
						>
							Add
						</div>
					</div>
				) : null}
				{projectsData.map((project, i) => (
					<ProjectCard key={i} project={project} />
				))}
			</div>
		</>
	);
};

export default ProjectsGrid;
