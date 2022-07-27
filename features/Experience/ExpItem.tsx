import { Stack, Typography, Grid } from '@mui/material';
import { FC } from 'react';

type Props = {
	title: string;
	role: string;
	dates: string;
	tech_stack: string[];
	description: string[];
	reverse?: boolean;
};

const ExpItem: FC<Props> = ({
	title,
	role,
	dates,
	tech_stack,
	reverse,
	description
}: Props) => {
	return (
		<Grid container direction={reverse ? 'row-reverse' : 'row'}>
			<Grid item xs={4}>
				<Stack>
					<Typography>{title}</Typography>
					<Typography>{role}</Typography>
					<Typography>{dates}</Typography>
					<Stack direction='row'>
						{tech_stack.map((item) => (
							<Typography key={item}>{item}</Typography>
						))}
					</Stack>
				</Stack>
			</Grid>
			<Grid item xs={8}>
				<ul>
					{description.map((item) => (
						<li key={item}>
							<Typography>{item}</Typography>
						</li>
					))}
				</ul>
			</Grid>
		</Grid>
	);
};

export default ExpItem;
