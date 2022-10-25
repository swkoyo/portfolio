import { Box, Stack, Typography, useTheme } from '@mui/material';
import type { NextComponentType } from 'next';
import SectionContainer from '../../components/SectionContainer';

const Home: NextComponentType = () => {
	const theme = useTheme();

	return (
		<SectionContainer
			sx={{
				minHeight: '100vh'
			}}
		>
			<Stack
				sx={{
					width: '100%',
					py: 'auto',
					textAlign: 'center'
				}}
			>
				<Typography variant='h3' fontWeight='bold'>
					Hello, I&apos;m{' '}
					<Box
						component='span'
						sx={{
							background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent'
						}}
					>
						Brandon.
					</Box>
				</Typography>
				<Typography variant='h3' fontWeight='bold'>
					I&apos;m a full stack web developer.
				</Typography>
			</Stack>
		</SectionContainer>
	);
};

export default Home;
