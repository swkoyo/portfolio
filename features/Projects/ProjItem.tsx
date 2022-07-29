import { Stack, Typography, Grid, Box } from '@mui/material';
import { FC } from 'react';
import TechIcon from '../../components/TechIcon';
import TECH from '../../constants';
import Image from 'mui-image';
import LinkIcon from '../../components/LinkIcon';

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
	image,
	links
}: Props) => {
	return (
		<Grid container direction={reverse ? 'row-reverse' : 'row'} spacing={2}>
			<Grid item xs={8}>
				<Stack position='relative'>
					<Image
						src={image}
						alt={title}
						height={350}
						style={{
							opacity: 0.7
						}}
					/>
					<Stack
						direction='row'
						columnGap={1}
						position='absolute'
						top={0}
						left={0}
					>
						{links.github ? (
							<LinkIcon
								tech={TECH.GITHUB}
								size={40}
								link={links.github}
							/>
						) : null}
						{links.web ? (
							<LinkIcon
								tech={TECH.GITHUB}
								size={40}
								link={links.web}
							/>
						) : null}
					</Stack>
				</Stack>
			</Grid>
			<Grid item xs={4}>
				<Stack height='100%'>
					<Typography variant='h4' fontWeight='bold' gutterBottom>
						{title}
					</Typography>
					<Typography>{description}</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Stack
						direction='row'
						sx={{
							overflow: 'auto'
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
		</Grid>
	);
};

export default ProjItem;
