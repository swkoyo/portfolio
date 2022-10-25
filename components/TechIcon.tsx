import { Tooltip } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { FC } from 'react';
import useTechIcon from '../hooks/useTechIcon';

type Props = {
	tech: string;
	size: number;
	tooltip?: boolean;
	useColor?: boolean;
	sx?: SxProps<Theme>;
};

const TechIcon: FC<Props> = ({
	tech,
	size,
	useColor,
	tooltip,
	sx = {}
}: Props) => {
	const Icon = useTechIcon({ tech, useColor });
	if (tooltip) {
		return (
			<Tooltip title={tech} arrow>
				<span>
					<Icon size={size} sx={sx} />
				</span>
			</Tooltip>
		);
	}
	return <Icon size={size} sx={sx} />;
};

export default TechIcon;
