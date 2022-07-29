import { Stack } from '@mui/material';
import type { NextComponentType } from 'next';
import SectionContainer from '../../components/SectionContainer';
import ProjItem from './ProjItem';
import data from './data';

const Projects: NextComponentType = () => {
	return (
		<SectionContainer title='Projects'>
			<Stack rowGap={4}>
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
};

export default Projects;
