import { Stack, Typography } from '@mui/material';
import type { NextComponentType } from 'next';
import LinkIcon from '../../components/LinkIcon';
import TechIcon from '../../components/TechIcon';
import { BUILT_WITH, EMAIL_ADDRESS, GITHUB_LINK, TECH } from '../../constants';

const Footer: NextComponentType = () => {
	return (
		<Stack
			sx={{
				backgroundColor: 'gray',
				py: 2,
				alignItems: 'center'
			}}
			rowGap={1}
		>
			<Stack direction='row'>
				<LinkIcon
					tech={TECH.GITHUB}
					size={30}
					link={GITHUB_LINK}
					icon_button
				/>
				<LinkIcon
					tech={TECH.EMAIL}
					size={30}
					blank_target={false}
					link={`mailto:${EMAIL_ADDRESS}`}
					icon_button
				/>
			</Stack>
			<Typography variant='body2'>Brandon Kim ©2022</Typography>
			<Stack
				direction='row'
				columnGap={1}
				sx={{
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Typography variant='caption'>Built With</Typography>
				<Stack direction='row' columnGap={0.5}>
					{BUILT_WITH.map((tech) => (
						<TechIcon key={tech} tech={tech} size={15} />
					))}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Footer;
