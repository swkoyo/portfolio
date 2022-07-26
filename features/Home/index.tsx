import { Box, Container, Stack, Typography } from '@mui/material';
import type { NextComponentType } from 'next';
import SectionContainer from '../../components/SectionContainer';

const Home: NextComponentType = () => {
	return (
		<SectionContainer>
			<Typography>Hello, I&apos;m Brandon.</Typography>
			<Typography>I&apos;m a full stack web developer.</Typography>
		</SectionContainer>
	);
};

export default Home;
