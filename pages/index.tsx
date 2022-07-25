import { Box, Container, Stack, Typography } from '@mui/material';
import type { NextPage } from 'next';
import About from '../features/About';

const Home: NextPage = () => {
	return (
		<Box sx={{ width: 'auto', backgroundColor: 'blue' }}>
			<Container>
				<Stack
					sx={{
						height: '100vh',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Typography>Hello, I&apos;m Brandon.</Typography>
					<Typography>
						I&apos;m a full stack web developer.
					</Typography>
				</Stack>
				<About />
			</Container>
		</Box>
	);
};

export default Home;
