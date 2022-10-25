import { Stack } from '@mui/material';
import type { NextComponentType } from 'next';
import SectionContainer from '../../components/SectionContainer';
import data from './data';
import ExpItem from './ExpItem';

const Experience: NextComponentType = () => {
	return (
		<SectionContainer title='Experience'>
			<Stack rowGap={15}>
				{data.map((item) => (
					<ExpItem
						key={item.title}
						title={item.title}
						role={item.role}
						dates={item.dates}
						description={item.description}
						tech_stack={item.tech_stack}
					/>
				))}
			</Stack>
		</SectionContainer>
	);
};

export default Experience;
