import {
	Grid,
	Stack,
	styled,
	Typography,
	useMediaQuery,
	useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import type { NextComponentType } from 'next';
import { useEffect, useRef, useState } from 'react';
import { RiUser6Line } from 'react-icons/ri';
import { useIntersectionObserver } from 'usehooks-ts';
import SectionContainer from '../../components/SectionContainer';
import data from './data';
import TechItem from './TechItem';

const StyledUserIcon = styled(RiUser6Line)({});

const About: NextComponentType = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));
	const [isShown, setShown] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});

	useEffect(() => {
		if (entry?.isIntersecting) {
			setShown(true);
		}
	}, [entry]);

	return (
		<SectionContainer title='About'>
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
				transition={{ duration: 0.3 }}
			>
				<Grid
					container
					columnSpacing={5}
					rowSpacing={5}
					direction={matches ? 'row' : 'column'}
				>
					<Grid item xs={6}>
						<Stack sx={{ width: 'auto' }} rowGap={1}>
							<svg width={0} height={0}>
								<linearGradient
									id='usericongradient'
									x1={1}
									y1={0}
									x2={1}
									y2={1}
								>
									<stop
										offset={0}
										stopColor={theme.palette.primary.main}
									/>
									<stop
										offset={1}
										stopColor={theme.palette.secondary.main}
									/>
								</linearGradient>
							</svg>
							<StyledUserIcon
								size={200}
								sx={{
									mx: 'auto',
									fill: 'url(#usericongradient)'
								}}
							/>
							<Typography
								variant={matches ? 'subtitle2' : 'body1'}
							>
								Experienced software developer offering
								expertise in full software development
								lifecycle, web application architecture, and
								project management. Proven track-record of
								designing and executing strategic development
								initiatives aligned to organizational objectives
								with a focus on end user satisfaction and
								engagement. Deep technical expertise combined
								with an understanding of the importance of
								client engagement and satisfaction.
								Collaborative team leader continually focused on
								building relationships to produce highly
								effective teams, increasing productivity, and
								improving outcomes. Individual dedicated to
								self-reflection and personal improvement who
								consistently exceeds performance metrics.
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Grid
							container
							justifyContent='center'
							alignItems='center'
							columnSpacing={2}
						>
							<Grid item xs={4}>
								<Stack rowGap={2}>
									{data.slice(0, 3).map((tech) => (
										<TechItem key={tech} tech={tech} />
									))}
								</Stack>
							</Grid>
							<Grid item xs={4}>
								<Stack rowGap={2}>
									{data.slice(3, 7).map((tech) => (
										<TechItem key={tech} tech={tech} />
									))}
								</Stack>
							</Grid>
							<Grid item xs={4}>
								<Stack rowGap={2}>
									{data.slice(7).map((tech) => (
										<TechItem key={tech} tech={tech} />
									))}
								</Stack>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</motion.div>
		</SectionContainer>
	);
};

export default About;
