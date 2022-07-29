import { Box, Container, Stack } from '@mui/material';
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
import { Link, Element } from 'react-scroll';

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
			</Container>
			<Stack
				sx={{
					position: 'sticky',
					top: '50%',
					ml: 10
				}}
			>
				<Link
					to='about'
					activeClass='active'
					spy={true}
					hashSpy={true}
					smooth={true}
					isDynamic={true}
					duration={500}
				>
					About
				</Link>
				<Link
					to='experience'
					activeClass='active'
					spy={true}
					hashSpy={true}
					smooth={true}
					isDynamic={true}
					duration={500}
				>
					Experience
				</Link>
				<Link
					to='projects'
					activeClass='active'
					spy={true}
					hashSpy={true}
					smooth={true}
					isDynamic={true}
					duration={500}
				>
					Projects
				</Link>
				<Link
					to='contact'
					activeClass='active'
					spy={true}
					hashSpy={true}
					smooth={true}
					isDynamic={true}
					duration={500}
				>
					Contact
				</Link>
			</Stack>
			<Container>
				<Element name='about'>
					<About />
				</Element>
				<Element name='experience'>
					<Experience />
				</Element>
				<Element name='projects'>
					<Projects />
				</Element>
				<Element name='contact'>
					<Contact />
				</Element>
			</Container>
			<Footer />
		</Box>
	);
};

export default Main;
