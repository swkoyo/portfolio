import {
	ActionIcon,
	Group,
	NavLink,
	Navbar,
	Stack,
	Text,
	rem,
	useMantineTheme
} from '@mantine/core';
import { capitalize } from 'lodash';
import Icon from '../components/Icon';
import { APP, NAV } from '../constants';
import useCurrentView from '../hooks/useCurrentView';

const NAV_LINK_ITEMS = [NAV.HOME, NAV.PROJECTS, NAV.RESUME];

export default function SideBar() {
	const { currentView, changeView } = useCurrentView();

	const theme = useMantineTheme();

	return (
		<Navbar width={{ base: 300 }} p='xs'>
			<Navbar.Section grow mt='xs'>
				{NAV_LINK_ITEMS.map((type) => (
					<NavLink
						key={type}
						label={<Text size='lg'>{capitalize(type)}</Text>}
						icon={<Icon type={type} size='1.5rem' />}
						active={currentView === type}
						onClick={() => changeView(type)}
					/>
				))}
			</Navbar.Section>
			<Navbar.Section>
				<Stack
					sx={(theme) => ({
						paddingTop: theme.spacing.sm,
						borderTop: `${rem(1)} solid ${
							theme.colorScheme === 'dark'
								? theme.colors.dark[4]
								: theme.colors.gray[4]
						}`,
						gap: rem(10),
						alignItems: 'center'
					})}
				>
					<Text size='xs'>Brandon Kim ©2023</Text>
					<Group sx={{ gap: rem(4) }}>
						<Text size='xs'>Inspired by Brittany Chiang</Text>
						<Group sx={{ gap: rem(1) }}>
							<ActionIcon
								component='a'
								color={
									theme.colorScheme === 'dark'
										? undefined
										: 'dark'
								}
								href='https://github.com/bchiang7/v4'
								target='_blank'
							>
								<Icon type={APP.GITHUB} size='1rem' />
							</ActionIcon>
							<ActionIcon
								component='a'
								color={
									theme.colorScheme === 'dark'
										? undefined
										: 'dark'
								}
								href='https://brittanychiang.com'
								target='_blank'
							>
								<Icon type={APP.WEBSITE} size='1rem' />
							</ActionIcon>
						</Group>
					</Group>
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}
