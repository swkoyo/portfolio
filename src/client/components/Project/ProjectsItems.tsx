import { ComponentType } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../models';

interface Props {
	projects: Project[];
}

const ProjectsItems: ComponentType<Props> = ({ projects }) => {
	return (
		<>
			{projects.map((project, i) => (
				<ProjectCard key={i} project={project} />
			))}
		</>
	);
};

export default ProjectsItems;
