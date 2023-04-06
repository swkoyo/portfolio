import { AppShell } from '@mantine/core';
import SideBar from './SideBar';

export default function MainShell() {
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
			Content
		</AppShell>
	);
}
