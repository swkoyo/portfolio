import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import TechIcon from '../../components/TechIcon';

type Props = {
	tech: string;
};

const TechItem: FC<Props> = ({ tech }) => {
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
			<TechIcon tech={tech} size={80} />
			<Typography>{tech}</Typography>
		</Stack>
	);
};

export default TechItem;
