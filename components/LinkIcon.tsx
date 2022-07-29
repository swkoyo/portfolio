import { Button } from '@mui/material';
import { Theme, SxProps } from '@mui/system';
import { FC } from 'react';
import useTechIcon from '../hooks/useTechIcon';

type Props = {
	tech: string;
	size: number;
	link: string;
	sx?: SxProps<Theme>;
};

const LinkIcon: FC<Props> = ({ tech, size, link, sx = {} }: Props) => {
	const Icon = useTechIcon({ tech });
	return (
		<Button target='_blank' href={link} variant='contained'>
			<Icon size={size} sx={sx} />
		</Button>
	);
};

export default LinkIcon;
