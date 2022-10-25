import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import About from '../features/About';
import Contact from '../features/Contact';
import Experience from '../features/Experience';
import Footer from '../features/Footer';
import Home from '../features/Home';
import Projects from '../features/Projects';

const Main: NextPage = () => {
	const particlesInit = async (main: Engine) => {
		await loadStarsPreset(main);
	};

	return (
		<Box sx={{ width: 'auto' }}>
			<Particles
				init={particlesInit}
				options={{
					preset: 'stars',
					detectRetina: true,
					backgroundMode: {
						zIndex: -1,
						enable: true
					},
					background: {
						color: '#1B1B1A'
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
			<Home />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</Box>
	);
};

export default Main;
