import { Stack } from '@mui/material';
import { forwardRef } from 'react';
import SectionContainer from '../../components/SectionContainer';
import data from './data';
import ExpItem from './ExpItem';

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<SectionContainer ref={ref} title='Experience'>
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
});

Experience.displayName = 'Experience';

export default Experience;
