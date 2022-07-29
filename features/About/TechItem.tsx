import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import getTechIcon from '../../hooks/getTechIcon';

type Props = {
	tech: string;
};

const TechItem: FC<Props> = ({ tech }) => {
	const Icon = getTechIcon({ tech });
	return (
		<Stack
			sx={{
				px: 2,
				py: 1,
				border: 1,
				borderRadius: 4,
				alignItems: 'center'
			}}
		>
			<Icon size={80} />
			<Typography>{tech}</Typography>
		</Stack>
	);
};

export default TechItem;
