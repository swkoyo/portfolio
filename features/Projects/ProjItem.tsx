import { Box, Grid, Stack, Typography } from '@mui/material';
import { isArray } from 'lodash';
import Image from 'mui-image';
import { FC } from 'react';
import LinkIcon from '../../components/LinkIcon';
import TechIcon from '../../components/TechIcon';
import { TECH } from '../../constants';

type Props = {
	title: string;
	tech_stack: string[];
	description: string;
	reverse?: boolean;
	image: string;
	links: {
		github: string | string[];
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
	const githubLinks = () => {
		if (isArray(links.github)) {
			return (
				<>
					<LinkIcon
						tech={TECH.GITHUB}
						size={30}
						color='secondary'
						link={links.github[0]}
						title='Github Client'
					/>
					<LinkIcon
						tech={TECH.GITHUB}
						size={30}
						color='secondary'
						link={links.github[1]}
						title='Github Server'
					/>
				</>
			);
		} else {
			return (
				<LinkIcon
					tech={TECH.GITHUB}
					color='secondary'
					size={30}
					link={links.github}
					title='Github'
				/>
			);
		}
	};

	return (
		<Grid container direction={reverse ? 'row-reverse' : 'row'} spacing={2}>
			<Grid item xs={8}>
				<Stack
					position='relative'
					p={2}
					sx={{
						borderRadius: 2,
						backgroundColor: 'primary.main'
					}}
				>
					<Image src={image} alt={title} height={350} fit='fill' />
					<Stack
						direction='row'
						columnGap={1}
						position='absolute'
						bottom={5}
						left={reverse ? undefined : 5}
						right={reverse ? 5 : undefined}
					>
						{githubLinks()}
						{links.web ? (
							<LinkIcon
								tech={TECH.WEB}
								color='secondary'
								size={30}
								link={links.web}
								title='Website'
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
