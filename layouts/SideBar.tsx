import {
	ActionIcon,
	Group,
	NavLink,
	Navbar,
	Stack,
	Text,
	rem
} from '@mantine/core';
import { capitalize } from 'lodash';
import Icon from '../components/Icon';
import { APP, NAV } from '../constants';
import useCurrentView from '../hooks/useCurrentView';

const NAV_LINK_ITEMS = [NAV.HOME, NAV.PROJECTS, NAV.RESUME];

export default function SideBar() {
	const { currentView, changeView } = useCurrentView();

	return (
		<Navbar width={{ base: 300 }} p='xs'>
			<Navbar.Section grow mt='xs'>
				{NAV_LINK_ITEMS.map((type) => (
					<NavLink
						key={type}
						label={capitalize(type)}
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
						borderTop: `${rem(1)} solid ${theme.colors.dark[4]}`,
						gap: rem(10),
						alignItems: 'center'
					})}
				>
					<Text size='xs'>Brandon Kim ©2023</Text>
					<Group sx={{ gap: rem(4) }}>
						<Text size='xs'>Inspired by Brittany Chiang</Text>
						<Group sx={{ gap: rem(3) }}>
							<ActionIcon
								component='a'
								href='https://github.com/bchiang7/v4'
								target='_blank'
							>
								<Icon type={APP.GITHUB} size='1.2rem' />
							</ActionIcon>
							<ActionIcon
								component='a'
								href='https://brittanychiang.com'
								target='_blank'
							>
								<Icon type={APP.WEBSITE} size='1.2rem' />
							</ActionIcon>
						</Group>
					</Group>
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}
