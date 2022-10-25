import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import Link from 'next/link';
import { FC, RefObject, useEffect, useState } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

type Props = {
	aboutRef: RefObject<HTMLDivElement>;
	experienceRef: RefObject<HTMLDivElement>;
	projectsRef: RefObject<HTMLDivElement>;
	contactRef: RefObject<HTMLDivElement>;
};

const NavBar: FC<Props> = ({
	aboutRef,
	experienceRef,
	projectsRef,
	contactRef
}) => {
	const [currentComponent, setCurrentComponent] = useState<string | null>(
		null
	);

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
		<AppBar
			position='sticky'
			sx={{
				top: 0
			}}
		>
			<Toolbar>
				<Box flexGrow={1} />
				<Stack direction='row' gap={2}>
					<Link href='#About' passHref>
						<Button
							variant={
								currentComponent === 'about'
									? 'contained'
									: 'text'
							}
							sx={{
								transition: 'all .2s ease-in-out'
							}}
						>
							About
						</Button>
					</Link>
					<Link href='#Experience' passHref>
						<Button
							variant={
								currentComponent === 'experience'
									? 'contained'
									: 'text'
							}
							sx={{
								transition: 'all .2s ease-in-out'
							}}
						>
							Experience
						</Button>
					</Link>
					<Link href='#Projects' passHref>
						<Button
							variant={
								currentComponent === 'projects'
									? 'contained'
									: 'text'
							}
							sx={{
								transition: 'all .2s ease-in-out'
							}}
						>
							Projects
						</Button>
					</Link>
					<Link href='#Contact' passHref>
						<Button
							variant={
								currentComponent === 'contact'
									? 'contained'
									: 'text'
							}
							sx={{
								transition: 'all .2s ease-in-out'
							}}
						>
							Contact
						</Button>
					</Link>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
