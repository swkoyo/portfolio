import { Box, Stack, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import type { NextComponentType } from 'next';
import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import SectionContainer from '../../components/SectionContainer';

const Home: NextComponentType = () => {
	const theme = useTheme();
	const [isShown, setShown] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});

	useEffect(() => {
		if (entry?.isIntersecting) {
			setShown(true);
		}
	}, [entry]);

	return (
		<SectionContainer
			sx={{
				minHeight: '100vh'
			}}
		>
			<motion.div
				ref={ref}
				initial={{
					opacity: 0,
					scale: 0.5
				}}
				animate={{
					opacity: isShown ? 1 : 0,
					scale: isShown ? 1 : 0.5
				}}
				transition={{ duration: 0.5 }}
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
			</motion.div>
		</SectionContainer>
	);
};

export default Home;
