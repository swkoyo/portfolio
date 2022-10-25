import { FiberManualRecord } from '@mui/icons-material';
import {
	Box,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
	useMediaQuery,
	useTheme
} from '@mui/material';
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
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Grid container columnSpacing={7} rowSpacing={4}>
			<Grid item xs={12} md={5}>
				<Stack
					sx={{
						justifyContent: 'space-evenly',
						background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.main});`,
						p: 4,
						borderRadius: 4,
						boxShadow: 10
					}}
					gap={3}
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
							flexWrap: 'wrap',
							'&::-webkit-scrollbar': {
								width: '0.4em'
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
								<TechIcon
									tooltip
									tech={tech}
									size={matches ? 50 : 30}
								/>
							</Box>
						))}
					</Stack>
				</Stack>
			</Grid>
			<Grid item xs={12} md={7}>
				<List dense disablePadding>
					{description.map((item) => (
						<ListItem key={item} disableGutters>
							<ListItemIcon>
								<FiberManualRecord fontSize='small' />
							</ListItemIcon>
							<ListItemText primary={item} />
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	);
};

export default ExpItem;
