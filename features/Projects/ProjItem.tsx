import { Box, Stack, Typography, Grid } from '@mui/material';
import { FC } from 'react';

type Props = {
	title: string;
	tech_stack: string[];
	description: string;
	reverse?: boolean;
	image: string;
	links: {
		github: string;
		web?: string;
	};
};

const ProjItem: FC<Props> = ({
	title,
	tech_stack,
	reverse,
	description,
	image
}: // links
Props) => {
	return (
		<Grid container direction={reverse ? 'row-reverse' : 'row'}>
			<Grid item xs={8}>
				<Box
					sx={{
						height: '100%',
						width: '100%',
						backgroundImage: image
					}}
				>
					{tech_stack.map((item) => (
						<Typography key={item}>{item}</Typography>
					))}
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Stack>
					<Typography>{title}</Typography>
					<Typography>{description}</Typography>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default ProjItem;
