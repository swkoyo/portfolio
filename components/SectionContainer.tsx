import { Box, Container, Stack, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { motion } from 'framer-motion';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

type Props = {
	title?: string;
	children: ReactNode;
	sx?: SxProps<Theme>;
};

const SectionContainer: FC<Props> = ({ title, children, sx }: Props) => {
	const [isShown, setShown] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});

	useEffect(() => {
		if (entry?.isIntersecting) {
			setShown(true);
		}
	}, [entry]);

	return (
		<Container
			component={Stack}
			sx={{
				position: 'relative',
				display: 'flex',
				minHeight: '100vh',
				width: '100%',
				py: 10,
				justifyContent: 'center',
				alignItems: 'center',
				...sx
			}}
		>
			{title ? (
				<motion.div
					ref={ref}
					initial={{
						opacity: 0,
						scale: !title ? 1 : 0.5
					}}
					animate={{
						opacity: isShown ? 1 : 0,
						scale: isShown ? 1 : 0.5
					}}
					transition={{ duration: 0.5 }}
				>
					<Typography
						sx={{
							mb: 15,
							textAlign: 'center',
							position: 'relative'
						}}
						variant='h2'
						fontWeight='bold'
					>
						{title}
						<Box
							sx={{
								position: 'absolute',
								bottom: 0,
								width: '70%',
								backgroundColor: 'primary.main',
								height: 20,
								right: -20,
								zIndex: -1
							}}
						/>
					</Typography>
				</motion.div>
			) : null}
			{children}
		</Container>
	);
};

export default SectionContainer;
