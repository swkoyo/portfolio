import { AppShell } from '@mantine/core';
import useCurrentView from '../hooks/useCurrentView';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default function MainShell() {
	const { View } = useCurrentView();

	return (
		<AppShell
			padding='md'
			header={<TopBar />}
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
