import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import useTechIcon from '../../hooks/useTechIcon';

type Props = {
	tech: string;
};

const TechItem: FC<Props> = ({ tech }) => {
	const Icon = useTechIcon({ tech });
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
