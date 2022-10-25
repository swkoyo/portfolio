import { Box, Grid, List, ListItem, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import TechIcon from '../../components/TechIcon';

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
	description
}: Props) => {
	return (
		<Grid container columnSpacing={4}>
			<Grid item xs={5}>
				<Stack
					sx={{
						height: 250,
						justifyContent: 'space-between',
						backgroundColor: 'primary.main',
						p: 4,
						borderRadius: 4,
						boxShadow: 10
					}}
				>
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
							overflow: 'auto',
							'&::-webkit-scrollbar': {
								height: '0.4em'
							},
							'&::-webkit-scrollbar-track': {
								boxShadow: 'inset 0 0 6px rgba(128, 128, 128)',
								borderRadius: 10,
								webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0, 0)'
							},
							'&::-webkit-scrollbar-thumb': {
								backgroundColor: 'rgba(178, 190, 181)',
								borderRadius: 10
							}
						}}
						columnGap={1}
					>
						{tech_stack.map((tech) => (
							<Box key={tech}>
								<TechIcon tech={tech} size={50} />
							</Box>
						))}
					</Stack>
				</Stack>
			</Grid>
			<Grid item xs={7}>
				<List disablePadding>
					{description.map((item) => (
						<ListItem key={item} disableGutters>
							<Typography variant='body2'>{item}</Typography>
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	);
};

export default ExpItem;
