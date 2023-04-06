import { AppShell } from '@mantine/core';
import SideBar from './SideBar';
import useCurrentView from '../hooks/useCurrentView';

export default function MainShell() {
	const { View } = useCurrentView();

	return (
		<AppShell
			padding='md'
			navbar={<SideBar />}
			styles={(theme) => ({
				main: {
					backgroundColor: theme.colors.dark[8]
				}
			})}
		>
			{View}
		</AppShell>
	);
}
