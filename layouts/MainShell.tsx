import { AppShell, Box } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import useCurrentView from '../hooks/useCurrentView';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default function MainShell() {
	const { View } = useCurrentView();
	const [isLoading, setIsLoading] = useState(true);

	const { start, clear } = useTimeout(() => {
		setIsLoading(false);
		clear();
	}, 100);

	useEffect(() => start(), []);

	return (
		<AppShell
			padding='md'
			header={<TopBar />}
			navbar={<SideBar />}
			styles={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[2]
				}
			})}
		>
			{isLoading ? <Box /> : View}
		</AppShell>
	);
}
