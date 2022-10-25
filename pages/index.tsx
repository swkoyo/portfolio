import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { useIntersectionObserver } from 'usehooks-ts';
import NavBar from '../components/NavBar';
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

	const [currentComponent, setCurrentComponent] = useState<string | null>(
		null
	);

	const aboutRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const aboutEntry = useIntersectionObserver(aboutRef, { threshold: 0.3 });
	const experienceEntry = useIntersectionObserver(experienceRef, {
		threshold: 0.3
	});
	const projectsEntry = useIntersectionObserver(projectsRef, {
		threshold: 0.3
	});
	const contactEntry = useIntersectionObserver(contactRef, {
		threshold: 0.3
	});

	useEffect(() => {
		if (aboutEntry?.isIntersecting) {
			setCurrentComponent('about');
		} else if (experienceEntry?.isIntersecting) {
			setCurrentComponent('experience');
		} else if (projectsEntry?.isIntersecting) {
			setCurrentComponent('projects');
		} else if (contactEntry?.isIntersecting) {
			setCurrentComponent('contact');
		} else {
			setCurrentComponent(null);
		}
	}, [aboutEntry, experienceEntry, projectsEntry, contactEntry]);

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
			<NavBar currentComponent={currentComponent} />
			<About ref={aboutRef} />
			<Experience ref={experienceRef} />
			<Projects ref={projectsRef} />
			<Contact ref={contactRef} />
			<Footer />
		</Box>
	);
};

export default Main;
