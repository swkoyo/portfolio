import { Stack, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import TechIcon from '../../components/TechIcon';

type Props = {
	tech: string;
};

const TechItem: FC<Props> = ({ tech }) => {
	const theme = useTheme();
	return (
		<Stack
			sx={{
				position: 'relative',
				px: 2,
				py: 1,
				alignItems: 'center',
				'::before': {
					borderRadius: 5,
					content: '""',
					inset: 0,
					border: '4px solid transparent',
					background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) border-box`,
					WebkitMask:
						'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
					WebkitMaskComposite: 'xor',
					maskComposite: 'exclude',
					position: 'absolute'
				}
			}}
			rowGap={0.5}
		>
			<TechIcon tech={tech} size={80} />
			<Typography>{tech}</Typography>
		</Stack>
	);
};

export default TechItem;
