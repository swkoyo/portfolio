import { Button, IconButton, Tooltip } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { FC } from 'react';
import useTechIcon from '../hooks/useTechIcon';

type Props = {
	tech: string;
	size: number;
	link: string;
	blank_target?: boolean;
	icon_button?: boolean;
	sx?: SxProps<Theme>;
	title?: string;
};

const LinkIcon: FC<Props> = ({
	tech,
	blank_target = true,
	size,
	link,
	icon_button = false,
	title,
	sx = {}
}: Props) => {
	const Icon = useTechIcon({ tech });

	const element = () => {
		if (icon_button) {
			return (
				<IconButton
					target={blank_target ? '_blank' : undefined}
					href={link}
					size='small'
					color='secondary'
				>
					<Icon size={size} sx={sx} />
				</IconButton>
			);
		} else {
			return (
				<Button
					target={blank_target ? '_blank' : undefined}
					href={link}
					color='secondary'
					variant='contained'
					size='small'
				>
					<Icon size={size} sx={sx} />
				</Button>
			);
		}
	};

	if (title) {
		return (
			<Tooltip arrow title={title}>
				{element()}
			</Tooltip>
		);
	} else {
		return element();
	}
};

export default LinkIcon;
