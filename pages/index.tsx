import { Box, Container, Stack, Typography } from '@mui/material';
import type { NextPage } from 'next';
import About from '../features/About';
import Contact from '../features/Contact';
import Experience from '../features/Experience';
import Home from '../features/Home';
import Projects from '../features/Projects';

const Main: NextPage = () => {
	return (
		<Box sx={{ width: 'auto', backgroundColor: 'blue' }}>
			<Container>
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</Container>
		</Box>
	);
};

export default Main;
