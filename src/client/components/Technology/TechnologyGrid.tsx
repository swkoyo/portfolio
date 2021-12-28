import { ComponentType } from 'react';
import TechnologyLogo from './TechnologyLogo';
import { Technology } from '../../models';

interface Props {
	technologies: Technology[];
}

const TechnologyGrid: ComponentType<Props> = ({ technologies }) => {
	return (
		<div className='grid grid-cols-4 md:grid-cols-2 gap-2 bg-neutral rounded-box p-4 h-full overflow-y-auto'>
			<div className='mx-auto col-span-full uppercase'>Technologies</div>
			{technologies.map((tech) => (
				<div
					key={tech.id}
					className='flex flex-row space-x-2 relative items-center'
				>
					<TechnologyLogo width={40} height={40} tech={tech} />
					<div className='hidden lg:flex uppercase text-2xs'>
						{tech.name}
					</div>
				</div>
			))}
		</div>
	);
};

export default TechnologyGrid;
