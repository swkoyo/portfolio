import { Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
	title?: string;
	children: ReactNode;
};

const SectionContainer: FC<Props> = ({ title, children }: Props) => {
	return (
		<Stack
			sx={{
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{title ? <Typography>{title}</Typography> : null}
			{children}
		</Stack>
	);
};

export default SectionContainer;
