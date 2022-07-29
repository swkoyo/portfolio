import { Theme, SxProps } from '@mui/system';
import { FC } from 'react';
import useTechIcon from '../hooks/useTechIcon';

type Props = {
	tech: string;
	size: number;
	sx?: SxProps<Theme>;
};

const TechIcon: FC<Props> = ({ tech, size, sx = {} }: Props) => {
	const Icon = useTechIcon({ tech });
	return <Icon size={size} sx={sx} />;
};

export default TechIcon;
