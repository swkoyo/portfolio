import type { NextPage } from 'next';
import { Loader, Center, Image, Stack } from '@mantine/core';
import { useState } from 'react';
import { useTimeout } from '@mantine/hooks';
import MainShell from '../layouts/MainShell';
import { NODE_ENV } from '../constants';

const Main: NextPage = () => {
	const [isLoading, setIsLoading] = useState<boolean>(
		NODE_ENV === 'production'
	);
	useTimeout(() => setIsLoading(false), 2000, { autoInvoke: true });

	if (isLoading) {
		return (
			<Center h='100vh'>
				<Stack align='center'>
					<Image src='./logo.png' />
					<Loader />
				</Stack>
			</Center>
		);
	}

	return <MainShell />;
};

export default Main;
