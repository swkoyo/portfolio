import { Stack } from '@mui/material';
import type { NextComponentType } from 'next';
import data from './data';
import ExpItem from './ExpItem';
import SectionContainer from '../../components/SectionContainer';

const Experience: NextComponentType = () => {
	return (
		<SectionContainer title='Experience'>
			<Stack>
				{data.map((item, i) => (
					<ExpItem
						key={item.title}
						title={item.title}
						role={item.role}
						dates={item.dates}
						description={item.description}
						tech_stack={item.tech_stack}
						reverse={i % 2 === 0 ? false : true}
					/>
				))}
			</Stack>
		</SectionContainer>
	);
};

export default Experience;
