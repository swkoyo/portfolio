import { Stack, Typography } from '@mui/material';
import type { NextComponentType } from 'next';
import SectionContainer from '../../components/SectionContainer';

const Home: NextComponentType = () => {
	return (
		<SectionContainer
			sx={{
				rowGap: 1
			}}
		>
			<Stack direction='row' gap={2}>
				<Typography variant='h3'>Hello, I&apos;m</Typography>
				<Typography variant='h3' color='secondary'>
					Brandon.
				</Typography>
			</Stack>
			<Typography variant='h3'>
				I&apos;m a full stack web developer.
			</Typography>
		</SectionContainer>
	);
};

export default Home;
