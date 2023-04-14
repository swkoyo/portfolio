import { Center, Loader, Stack, rem } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import type { NextPage } from 'next';
import { useState } from 'react';
import MainLogo from '../components/MainLogo';
import { NODE_ENV } from '../constants';
import MainShell from '../layouts/MainShell';

const Main: NextPage = () => {
	const [isLoading, setIsLoading] = useState<boolean>(
		NODE_ENV === 'production'
	);
	useTimeout(() => setIsLoading(false), 2000, { autoInvoke: true });

	if (isLoading) {
		return (
			<Center h='100vh'>
				<Stack align='center'>
					<MainLogo width={rem(100)} />
					<Loader />
				</Stack>
			</Center>
		);
	}

	return <MainShell />;
};

export default Main;
