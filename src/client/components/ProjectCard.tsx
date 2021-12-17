import { ComponentType } from 'react';
import { Project } from '../models';
import Link from 'next/link';

interface Props {
	project: Project;
}

const ProjectCard: ComponentType<Props> = ({ project }) => {
	return (
		<Link href={`/portfolio/${project.name}`}>
			<div className='card shadow bg-blue-300 hover:bg-black hover:cursor-pointer'>
				<div className='card-body'>
					<h2 className='card-title'>{project.name}</h2>
					<p>{project.description}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
