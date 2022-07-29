import { Button, IconButton } from '@mui/material';
import { Theme, SxProps } from '@mui/system';
import { FC } from 'react';
import useTechIcon from '../hooks/useTechIcon';

type Props = {
	tech: string;
	size: number;
	link: string;
	blank_target?: boolean;
	icon_button?: boolean;
	sx?: SxProps<Theme>;
};

const LinkIcon: FC<Props> = ({
	tech,
	blank_target = true,
	size,
	link,
	icon_button = false,
	sx = {}
}: Props) => {
	const Icon = useTechIcon({ tech });

	if (icon_button) {
		return (
			<IconButton
				target={blank_target ? '_blank' : undefined}
				href={link}
			>
				<Icon size={size} sx={sx} />
			</IconButton>
		);
	} else {
		return (
			<Button
				target={blank_target ? '_blank' : undefined}
				href={link}
				variant='contained'
			>
				<Icon size={size} sx={sx} />
			</Button>
		);
	}
};

export default LinkIcon;
