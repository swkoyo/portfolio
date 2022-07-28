import { Stack, Typography, Grid, styled } from '@mui/material';
import type { NextComponentType } from 'next';
import SectionContainer from '../../components/SectionContainer';
import { RiUser6Line } from 'react-icons/ri';

const StyledUserIcon = styled(RiUser6Line)();

const About: NextComponentType = () => {
	return (
		<SectionContainer title='About'>
			<Grid container>
				<Grid item xs={6}>
					<Stack sx={{ width: 'auto' }}>
						<StyledUserIcon size={200} sx={{ mx: 'auto' }} />
						<Typography variant='h6'>
							Software developer with a passion for consistently
							improving as a programmer. Highly motivated and
							disciplined individual with a strong work-ethic.
						</Typography>
					</Stack>
				</Grid>
				<Grid item xs={6}>
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
				</Grid>
			</Grid>
		</SectionContainer>
	);
};

export default About;
