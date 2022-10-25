import { Tooltip } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { FC } from 'react';
import useTechIcon from '../hooks/useTechIcon';

type Props = {
	tech: string;
	size: number;
	tooltip?: boolean;
	useColor?: boolean;
	colorMode?: 'static' | 'hover';
	sx?: SxProps<Theme>;
};

const TechIcon: FC<Props> = ({
	tech,
	size,
	useColor,
	tooltip,
	colorMode,
	sx = {}
}: Props) => {
	const Icon = useTechIcon({ tech, useColor, colorMode });
	if (tooltip) {
		return (
			<Tooltip title={tech} arrow followCursor>
				<span>
					<Icon size={size} sx={sx} />
				</span>
			</Tooltip>
		);
	}
	return <Icon size={size} sx={sx} />;
};

export default TechIcon;
