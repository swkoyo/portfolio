import { Box, Container, Stack, Typography } from '@mui/material';
import type { NextComponentType } from 'next';

const Footer: NextComponentType = () => {
	return (
		<Stack
			sx={{
				backgroundColor: 'white'
			}}
		>
			<Stack direction='row'>
				<Typography>Github</Typography>
				<Typography>Email</Typography>
			</Stack>
			<Typography>Brandon Kim ©2022</Typography>
		</Stack>
	);
};

export default Footer;
