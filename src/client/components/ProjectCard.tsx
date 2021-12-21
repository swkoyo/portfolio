import { ComponentType } from 'react';
import { Project } from '../models';
import Link from 'next/link';
import { useAuthContext } from '../context/AuthContext';
import cookieCutter from 'cookie-cutter';
import { usePortfolioContext } from '../context/PortfolioContext';

interface Props {
	project: Project;
}

const deleteTechnology = async (name: string) => {
	await fetch(
		`http://localhost:3000/api/projects?name=${encodeURIComponent(name)}`,
		{
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${cookieCutter.get('token')}`
			}
		}
	);
};

const ProjectCard: ComponentType<Props> = ({ project }) => {
	const { auth } = useAuthContext();
	const { refreshData } = usePortfolioContext();

	const handleDeleteProject = async (name: string) => {
		await deleteTechnology(name);
		await refreshData();
	};

	return (
		<div className='card shadow bg-blue-300 relative'>
			{auth ? (
				<div
					className='absolute top-0 right-0 btn btn-circle btn-xs btn-error'
					onClick={() => handleDeleteProject(project.name)}
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
