import { Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
	name: string;
	icon: ReactNode;
};

const TechItem: FC<Props> = ({ name, icon }: Props) => {
	return (
		<Stack>
			<Typography>{name}</Typography>
			{icon}
		</Stack>
	);
};

export default TechItem;
