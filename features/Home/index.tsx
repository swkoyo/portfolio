import { Box, Stack, Typography } from '@mui/material';
import type { NextComponentType } from 'next';
import SectionContainer from '../../components/SectionContainer';

const Home: NextComponentType = () => {
	return (
		<SectionContainer>
			<Stack
				sx={{
					width: '100%',
					mx: 'auto',
					textAlign: 'center'
				}}
			>
				<Typography variant='h3'>
					Hello, I&apos;m{' '}
					<Box component='span' sx={{ color: 'secondary.main' }}>
						Brandon.
					</Box>
				</Typography>
				<Typography variant='h3'>
					I&apos;m a full stack web developer.
				</Typography>
			</Stack>
		</SectionContainer>
	);
};

export default Home;
