import { Box, Container, Stack, Typography } from '@mui/material';
import type { NextComponentType } from 'next';

const About: NextComponentType = () => {
	return (
		<Stack
			sx={{
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Typography>About</Typography>
			<Stack direction='row'>
				<Stack>
					<Typography></Typography>
				</Stack>
				<Stack direction='row'>
					<Stack>
						<Typography>Node</Typography>
						<Typography>Typescript</Typography>
						<Typography>React</Typography>
					</Stack>
					<Stack>
						<Typography>PostgreSQL</Typography>
						<Typography>NestJS</Typography>
						<Typography>Next.JS</Typography>
						<Typography>Redis</Typography>
					</Stack>
					<Stack>
						<Typography>Stripe</Typography>
						<Typography>Material UI</Typography>
						<Typography>JWT</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default About;
