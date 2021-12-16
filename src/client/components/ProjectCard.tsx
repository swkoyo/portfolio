import { ComponentType } from 'react';
import { Project } from '../context/PortfolioContext';

interface Props {
	project: Project;
}

const ProjectCard: ComponentType<Props> = ({ project }) => {
	return (
		<div className='card shadow'>
			<div className='card-body bg-blue-300'>
				<h2 className='card-title'>{project.name}</h2>
				<p>{project.description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
