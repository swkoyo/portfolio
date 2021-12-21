import { ComponentType } from 'react';
import { Project } from '../../models';
import Link from 'next/link';
import { useAuthContext } from '../../context/AuthContext';
import { usePortfolioContext } from '../../context/PortfolioContext';

interface Props {
	project: Project;
}

const ProjectCard: ComponentType<Props> = ({ project }) => {
	const { auth } = useAuthContext();
	const { deleteProject } = usePortfolioContext();

	return (
		<div className='card shadow bg-blue-300 relative'>
			{auth ? (
				<div
					className='absolute top-0 right-0 btn btn-circle btn-xs btn-error'
					onClick={() => deleteProject(project.name)}
				>
					X
				</div>
			) : null}
			<Link href={`/portfolio/${project.name}`}>
				<div className='card-body hover:bg-black hover:cursor-pointer'>
					<h2 className='card-title'>{project.name}</h2>
					<p>{project.description}</p>
				</div>
			</Link>
		</div>
	);
};

export default ProjectCard;