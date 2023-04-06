import type { NextPage } from 'next';
import {
	AppShell,
	Navbar,
	Header,
	Loader,
	Center,
	Image,
	Stack
} from '@mantine/core';
import { useState } from 'react';
import { useTimeout } from '@mantine/hooks';

const Main: NextPage = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
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

	return (
		<AppShell
			padding='md'
			navbar={
				<Navbar width={{ base: 300 }} height='100vh' p='xs'>
					Navbar
				</Navbar>
			}
			header={
				<Header height={60} p='xs'>
					Header
				</Header>
			}
			styles={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0]
				}
			})}
		>
			Content
		</AppShell>
	);
};

export default Main;
