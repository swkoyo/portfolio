import { Stack, Text } from '@mantine/core';
import { TbError404 } from 'react-icons/tb';
import MainContainer from '../layouts/MainContainer';

export default function Error() {
	return (
		<MainContainer>
			<Stack spacing={0} align='center'>
				<TbError404 size='10rem' />
				<Text size='2xl'>Page not found!</Text>
			</Stack>
		</MainContainer>
	);
}
