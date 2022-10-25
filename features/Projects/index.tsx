import { Stack } from '@mui/material';
import { forwardRef } from 'react';
import SectionContainer from '../../components/SectionContainer';
import data from './data';
import ProjItem from './ProjItem';

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<SectionContainer ref={ref} title='Projects'>
			<Stack rowGap={15}>
				{data.map((item, i) => (
					<ProjItem
						key={item.title}
						title={item.title}
						description={item.description}
						links={item.links}
						tech_stack={item.tech_stack}
						image={item.image}
						reverse={i % 2 === 0 ? false : true}
					/>
				))}
			</Stack>
		</SectionContainer>
	);
});

Projects.displayName = 'Projects';

export default Projects;
