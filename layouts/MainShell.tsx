import type { NextComponentType } from 'next';
import { AppShell } from '@mantine/core';
import SideBar from './SideBar';
import TopBar from './TopBar';

const MainShell: NextComponentType = () => {
	return (
		<AppShell
			padding='md'
			navbar={<SideBar />}
			header={<TopBar />}
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

export default MainShell;
