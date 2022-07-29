import { Stack, Typography, Grid, Box } from '@mui/material';
import { FC } from 'react';
import ExpTechItem from './ExpTechItem';

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
		<Grid container direction={reverse ? 'row-reverse' : 'row'} spacing={2}>
			<Grid item xs={4}>
				<Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
					<Typography variant='h4' fontWeight='bold'>
						{title}
					</Typography>
					<Stack>
						<Typography>{role}</Typography>
						<Typography variant='body2'>{dates}</Typography>
					</Stack>
					<Stack
						direction='row'
						sx={{
							overflow: 'auto'
						}}
						columnGap={1}
					>
						{tech_stack.map((tech) => (
							<Box key={tech}>
								<ExpTechItem tech={tech} />
							</Box>
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
