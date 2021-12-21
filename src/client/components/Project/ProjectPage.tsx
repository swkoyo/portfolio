import { ComponentType, useState } from 'react';
import { Project } from '../../models';
import TechnologyLogo from '../Technology/TechnologyLogo';
import { useAuthContext } from '../../context/AuthContext';
import ProjectForm from './ProjectForm';

interface Props {
	project: Project;
}

const ProjectPage: ComponentType<Props> = ({ project }) => {
	const { auth } = useAuthContext();
	const [showFormModal, setShowFormModal] = useState(false);

	return (
		<>
			<div className={`modal ${showFormModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<ProjectForm handleShow={setShowFormModal} />
				</div>
			</div>
			<div className='grid grid-cols-3 gap-4 relative'>
				{auth ? (
					<div
						className='absolute top-0 right-0 btn btn-primary'
						onClick={() => setShowFormModal(true)}
					>
						Edit
					</div>
				) : null}
				<div className='text-8xl text-center uppercase col-span-2'>
					{project.name}
				</div>
				<div className='col-span-1 row-span-2'>
					<div className='grid grid-cols-2 gap-4 bg-neutral h-full rounded-box p-4'>
						<div className='col-span-2 uppercase'>Technologies</div>
						{project.technologies.map((tech, i) => (
							<div key={i} className='relative'>
								<div className='flex flex-row space-x-2 items-center'>
									<TechnologyLogo tech={tech} />
									<div className='text-xs uppercase'>
										{tech.name}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='text-center col-span-2'>Links</div>
				<div className='text-center col-span-3 mt-4'>
					{project.description}
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
