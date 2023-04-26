import { AppShell } from '@mantine/core';
import { ReactNode } from 'react';
import MainContainer from './MainContainer';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default function MainShell({ children }: { children: ReactNode }) {
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
			<MainContainer>{children}</MainContainer>
		</AppShell>
	);
}
