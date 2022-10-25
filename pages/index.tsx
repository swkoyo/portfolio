import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { useRef } from 'react';
import NavBar from '../components/NavBar';
import About from '../features/About';
import Contact from '../features/Contact';
import Experience from '../features/Experience';
import Footer from '../features/Footer';
import Home from '../features/Home';
import Projects from '../features/Projects';

const Main: NextPage = () => {
	const aboutRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	return (
		<Box sx={{ width: 'auto' }}>
			<Home />
			<NavBar
				aboutRef={aboutRef}
				experienceRef={experienceRef}
				projectsRef={projectsRef}
				contactRef={contactRef}
			/>
			<About ref={aboutRef} />
			<Experience ref={experienceRef} />
			<Projects ref={projectsRef} />
			<Contact ref={contactRef} />
			<Footer />
		</Box>
	);
};

export default Main;
