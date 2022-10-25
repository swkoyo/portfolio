import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
	currentComponent: string | null;
};

const NavBar: FC<Props> = ({ currentComponent }) => {
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
