import {
	Box,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
	useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { isArray } from 'lodash';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { useHover, useIntersectionObserver } from 'usehooks-ts';
import LinkIcon from '../../components/LinkIcon';
import TechIcon from '../../components/TechIcon';
import { TECH } from '../../constants';

type Props = {
	title: string;
	tech_stack: string[];
	description: string;
	reverse?: boolean;
	image: string;
	links: {
		github: string | string[];
		web?: string;
	};
};

const ProjItem: FC<Props> = ({
	title,
	tech_stack,
	reverse,
	description,
	image,
	links
}: Props) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	const [isShown, setShown] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});

	useEffect(() => {
		if (entry?.isIntersecting) {
			setShown(true);
		}
	}, [entry]);

	const githubLinks = () => {
		if (isArray(links.github)) {
			return (
				<>
					<LinkIcon
						tech={TECH.GITHUB}
						size={30}
						color='secondary'
						link={links.github[0]}
						title='Github Client'
					/>
					<LinkIcon
						tech={TECH.GITHUB}
						size={30}
						color='secondary'
						link={links.github[1]}
						title='Github Server'
					/>
				</>
			);
		} else {
			return (
				<LinkIcon
					tech={TECH.GITHUB}
					color='secondary'
					size={30}
					link={links.github}
					title='Github'
				/>
			);
		}
	};

	return (
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
			<Grid
				container
				direction={reverse ? 'row-reverse' : 'row'}
				columnSpacing={5}
				rowGap={1}
			>
				<Grid item xs={12} md={8}>
					<Stack
						ref={hoverRef}
						position='relative'
						p={1}
						sx={{
							borderRadius: 2,
							background: theme.palette.primary.main,
							':hover': {
								transform: 'scale(1.1)'
							},
							transition: 'all .3s ease-in-out'
						}}
					>
						<Image
							src={image}
							alt={title}
							height={350}
							width={750}
							priority
							style={{
								WebkitFilter: isHover
									? undefined
									: 'grayscale(100%)',
								filter: isHover ? undefined : 'grayscale(100%)',
								transition: 'all .3s ease-in-out'
							}}
							quality={100}
							layout='responsive'
							objectFit='fill'
						/>
						<Stack
							direction='row'
							columnGap={1}
							position='absolute'
							bottom={5}
							left={reverse ? undefined : 5}
							right={reverse ? 5 : undefined}
						>
							{githubLinks()}
							{links.web ? (
								<LinkIcon
									tech={TECH.WEB}
									color='secondary'
									size={30}
									link={links.web}
									title='Website'
								/>
							) : null}
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={12} md={4}>
					<Stack
						height='100%'
						minHeight={300}
						justifyContent='space-evenly'
					>
						<Typography
							variant='h4'
							fontWeight='bold'
							sx={{
								background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						>
							{title}
						</Typography>
						<Typography>{description}</Typography>
						<Stack
							direction='row'
							flexWrap='wrap'
							sx={{
								overflow: 'auto',
								'&::-webkit-scrollbar': {
									width: '0.4em'
								},
								'&::-webkit-scrollbar-track': {
									boxShadow:
										'inset 0 0 6px rgba(128, 128, 128)',
									borderRadius: 10,
									webkitBoxShadow:
										'inset 0 0 6px rgba(0,0,0, 0)'
								},
								'&::-webkit-scrollbar-thumb': {
									backgroundColor: 'rgba(178, 190, 181)',
									borderRadius: 10
								}
							}}
							columnGap={1}
						>
							{tech_stack.map((tech) => (
								<Box key={tech}>
									<TechIcon
										useColor
										colorMode='hover'
										tooltip
										tech={tech}
										size={matches ? 50 : 30}
									/>
								</Box>
							))}
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</motion.div>
	);
};

export default ProjItem;
