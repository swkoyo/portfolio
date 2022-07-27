import { Box, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import About from '../features/About';
import Contact from '../features/Contact';
import Experience from '../features/Experience';
import Footer from '../features/Footer';
import Home from '../features/Home';
import Projects from '../features/Projects';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';

const Main: NextPage = () => {
	const particlesInit = async (main: Engine) => {
		await loadLinksPreset(main);
	};

	return (
		<Box sx={{ width: 'auto' }}>
			<Particles
				init={particlesInit}
				options={{
					preset: 'links',
					detectRetina: true,
					backgroundMode: {
						zIndex: -1,
						enable: true
					},
					interactivity: {
						detectsOn: 'window',
						events: {
							onHover: {
								mode: ['trail'],
								enable: true
							},
							resize: true
						},
						modes: {
							trail: {
								delay: 0.05,
								quantity: 5
							}
						}
					}
				}}
			/>
			<Container>
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</Container>
			<Footer />
		</Box>
	);
};

export default Main;
