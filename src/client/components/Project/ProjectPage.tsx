import { ComponentType } from 'react';
import { Project } from '../../models';
import TechnologyLogo from '../Technology/TechnologyLogo';

interface Props {
	project: Project;
}

const ProjectPage: ComponentType<Props> = ({ project }) => {
	return (
		<div className='grid grid-cols-3 gap-4'>
			<div className='text-center text-8xl uppercase col-span-2'>
				{project.name}
			</div>
			<div className='row-span-2'>
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
			<div className='text-center col-span-2'>{project.description}</div>
		</div>
	);
};

export default ProjectPage;
