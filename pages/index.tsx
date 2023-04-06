import type { NextPage } from 'next';
import { Loader, Center, Stack } from '@mantine/core';
import { useState } from 'react';
import { useTimeout } from '@mantine/hooks';
import MainShell from '../layouts/MainShell';
import { NODE_ENV } from '../constants';
import Logo from '../components/Logo';

const Main: NextPage = () => {
	const [isLoading, setIsLoading] = useState<boolean>(
		NODE_ENV === 'production'
	);
	useTimeout(() => setIsLoading(false), 2000, { autoInvoke: true });

	if (isLoading) {
		return (
			<Center h='100vh'>
				<Stack align='center'>
					<Logo remVal={100} />
					<Loader />
				</Stack>
			</Center>
		);
	}

	return <MainShell />;
};

export default Main;
