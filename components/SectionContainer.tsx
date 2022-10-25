import { Box, Container, Stack, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { FC, ReactNode } from 'react';

type Props = {
	title?: string;
	children: ReactNode;
	sx?: SxProps<Theme>;
};

const SectionContainer: FC<Props> = ({ title, children, sx }: Props) => {
	return (
		<Container
			component={Stack}
			sx={{
				position: 'relative',
				display: 'flex',
				// minHeight: '100vh',
				width: '100%',
				py: 10,
				justifyContent: 'center',
				alignItems: 'center',
				...sx
			}}
		>
			{title ? (
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
			) : null}
			{children}
		</Container>
	);
};

export default SectionContainer;
