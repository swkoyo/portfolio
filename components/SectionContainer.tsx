import { Container, Stack, Typography } from '@mui/material';
import { Theme, SxProps } from '@mui/system';
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
				minHeight: '100vh',
				width: '100%',
				py: 10,
				justifyContent: 'center',
				alignItems: 'center',
				...sx
			}}
		>
			{title ? (
				<Typography
					sx={{ pb: 10, textAlign: 'center' }}
					variant='h2'
					fontWeight='bold'
				>
					{title}
				</Typography>
			) : null}
			{children}
		</Container>
	);
};

export default SectionContainer;
