import { Stack, Typography } from '@mui/material';
import type { NextComponentType } from 'next';
import LinkIcon from '../../components/LinkIcon';
import TechIcon from '../../components/TechIcon';
import {
	BUILT_WITH,
	EMAIL_ADDRESS,
	GITHUB_LINK,
	LINKEDIN_LINK,
	RESUME_LINK,
	TECH
} from '../../constants';

const Footer: NextComponentType = () => {
	return (
		<Stack
			sx={{
				backgroundColor: 'gray',
				py: 2,
				alignItems: 'center'
			}}
			rowGap={0.5}
		>
			<Stack direction='row'>
				<LinkIcon
					useColor
					title='Github'
					tech={TECH.GITHUB}
					size='medium'
					link={GITHUB_LINK}
					icon_button
				/>
				<LinkIcon
					useColor
					title='LinkedIn'
					tech={TECH.LINKEDIN}
					size='medium'
					link={LINKEDIN_LINK}
					icon_button
				/>
				<LinkIcon
					useColor
					title='Resume'
					tech={TECH.RESUME}
					size='medium'
					link={RESUME_LINK}
					icon_button
				/>
				<LinkIcon
					useColor
					title='Email'
					tech={TECH.EMAIL}
					size='medium'
					blank_target={false}
					link={`mailto:${EMAIL_ADDRESS}`}
					icon_button
				/>
			</Stack>
			<Typography variant='overline'>Brandon Kim ©2022</Typography>
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
						<TechIcon tooltip key={tech} tech={tech} size={15} />
					))}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Footer;
