import { Box, Stack, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import type { NextComponentType } from 'next';
import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import LinkIcon from '../../components/LinkIcon';
import SectionContainer from '../../components/SectionContainer';
import {
	EMAIL_ADDRESS,
	GITHUB_LINK,
	LINKEDIN_LINK,
	RESUME_LINK,
	TECH
} from '../../constants';

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
					<Stack direction='row' mx='auto' gap={0.5} mt={1}>
						<LinkIcon
							useColor
							title='Github'
							tech={TECH.GITHUB}
							size='large'
							link={GITHUB_LINK}
							icon_button
						/>
						<LinkIcon
							useColor
							title='LinkedIn'
							tech={TECH.LINKEDIN}
							size='large'
							link={LINKEDIN_LINK}
							icon_button
						/>
						<LinkIcon
							useColor
							title='Resume'
							tech={TECH.RESUME}
							size='large'
							link={RESUME_LINK}
							icon_button
						/>
						<LinkIcon
							useColor
							title='Email'
							tech={TECH.EMAIL}
							size='large'
							blank_target={false}
							link={`mailto:${EMAIL_ADDRESS}`}
							icon_button
						/>
					</Stack>
				</Stack>
			</motion.div>
		</SectionContainer>
	);
};

export default Home;
