import { Stack, Typography } from '@mui/material';
import { Theme, SxProps } from '@mui/system';
import { FC, ReactNode } from 'react';

type Props = {
	title?: string;
	children: ReactNode;
	sx?: SxProps<Theme>;
};

const SectionContainer: FC<Props> = ({ title, children, sx }: Props) => {
	return (
		<Stack
			sx={{
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center',
				...sx
			}}
			rowGap={10}
		>
			{title ? (
				<Typography variant='h2' fontWeight='bold'>
					{title}
				</Typography>
			) : null}
			{children}
		</Stack>
	);
};

export default SectionContainer;
