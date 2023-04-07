import MainContainer from '../../layouts/MainContainer';
import FeaturedProject from './FeaturedProject';
import { PROJECTS } from './data';

export default function Projects() {
	return (
		<MainContainer>
			{PROJECTS.filter((project) => project.featured).map(
				(project, i) => (
					<FeaturedProject
						key={project.title}
						project={project}
						flip={i % 2 !== 0}
					/>
				)
			)}
		</MainContainer>
	);
}
