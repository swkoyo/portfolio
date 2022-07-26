import { Box, Container, Stack, Typography } from '@mui/material';
import type { NextComponentType } from 'next';
import SectionContainer from '../../components/SectionContainer';

const About: NextComponentType = () => {
	return (
		<SectionContainer title='About'>
			<Stack direction='row'>
				<Stack>
					<Typography>
						Software developer with a passion for consistently
						improving as a programmer. Highly motivated and
						disciplined individual with a strong work-ethic.
					</Typography>
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
		</SectionContainer>
	);
};

export default About;
