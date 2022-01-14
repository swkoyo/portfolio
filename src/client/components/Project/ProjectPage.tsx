import { ComponentType } from 'react';
import { Project } from '../../models';
import TechnologyLogo from '../Technology/TechnologyLogo';
import { pickBy } from 'lodash';
import SvgLink from '../SvgLink';

interface Props {
	project: Project;
}

const ProjectPage: ComponentType<Props> = ({ project }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-4 relative mx-auto w-full max-w-7xl'>
			<div className='text-4xl md:text-8xl text-center uppercase col-span-1 md:col-span-2'>
				{project.name}
			</div>
			<div className='md:row-span-2'>
				<div className='grid grid-cols-4 md:grid-cols-2 gap-4 bg-neutral h-full rounded-box p-4'>
					<div className='mx-auto col-span-full uppercase'>
						Technologies
					</div>

					{project.technologies.map((tech, i) => (
						<div key={i} className='relative'>
							<div className='flex flex-row space-x-2 items-center'>
								<TechnologyLogo
									width={40}
									height={40}
									tech={tech}
								/>
								<div className='hidden lg:flex text-2xs uppercase'>
									{tech.name}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-row mx-auto space-x-2 md:col-span-2'>
				{Object.entries(
					pickBy(project.link_urls, (value) => !!value)
				).map(([key, value]) => (
					<SvgLink key={key} type={key} url={value} />
				))}
			</div>
			<div className='text-center md:col-span-3 mt-4'>
				{project.description}
			</div>
		</div>
	);
};

export default ProjectPage;
