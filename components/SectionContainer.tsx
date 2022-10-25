import {
	Box,
	Container,
	Stack,
	Typography,
	useMediaQuery,
	useTheme
} from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { motion } from 'framer-motion';
import { forwardRef, ReactNode, RefObject, useEffect, useState } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

type Props = {
	title?: string;
	children: ReactNode;
	sx?: SxProps<Theme>;
};

const SectionContainer = forwardRef<HTMLDivElement, Props>(
	({ title, children, sx }, ref) => {
		const [isShown, setShown] = useState(false);
		const entry = useIntersectionObserver(ref as RefObject<Element>, {});
		const theme = useTheme();
		const matches = useMediaQuery(theme.breakpoints.up('md'));

		useEffect(() => {
			if (entry?.isIntersecting) {
				setShown(true);
			}
		}, [entry]);

		return (
			<Container
				ref={ref}
				id={title}
				component={Stack}
				sx={{
					position: 'relative',
					display: 'flex',
					width: '100%',
					py: 10,
					justifyContent: 'center',
					alignItems: 'center',
					...sx
				}}
			>
				{title ? (
					<motion.div
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
							variant={matches ? 'h2' : 'h3'}
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
	}
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
