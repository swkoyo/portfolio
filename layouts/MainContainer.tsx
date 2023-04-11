import { Container, Stack } from '@mantine/core';
import { ReactNode } from 'react';

export default function MainContainer({ children }: { children: ReactNode }) {
	return (
		<Container h='100%'>
			<Stack w='100%' h='100%' sx={{ rowGap: 50 }}>
				{children}
			</Stack>
		</Container>
	);
}
