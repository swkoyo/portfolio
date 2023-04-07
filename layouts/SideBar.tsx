import {
	Avatar,
	Box,
	Flex,
	Group,
	NavLink,
	Navbar,
	Stack,
	Text,
	rem
} from '@mantine/core';
import { capitalize } from 'lodash';
import Icon from '../components/Icon';
import {
	APP,
	EMAIL_ADDRESS,
	GITHUB_LINK,
	LINKEDIN_LINK,
	NAV,
	TECH
} from '../constants';
import useCurrentView from '../hooks/useCurrentView';

const NAV_LINK_ITEMS = [NAV.ABOUT, NAV.EXPERIENCE, NAV.PROJECTS];

const EXTERNAL_LINKS = [
	{
		type: APP.GITHUB,
		link: GITHUB_LINK
	},
	{
		type: APP.LINKEDIN,
		link: LINKEDIN_LINK
	},
	{
		type: APP.EMAIL,
		link: `mailto:${EMAIL_ADDRESS}`
	}
];

export default function SideBar() {
	const { currentView, changeView } = useCurrentView();

	return (
		<Navbar width={{ base: 300 }} p='xs'>
			<Navbar.Section mt='xs'>
				<Box
					sx={(theme) => ({
						paddingLeft: theme.spacing.xs,
						paddingRight: theme.spacing.xs,
						paddingBottom: theme.spacing.lg,
						borderBottom: `${rem(1)} solid ${theme.colors.dark[4]}`
					})}
				>
					<Group position='apart'>
						<Flex align='center' gap={10}>
							<Avatar src='./avatar.png' size='lg' radius='xl' />
							<Text>Brandon Kim</Text>
						</Flex>
					</Group>
				</Box>
			</Navbar.Section>
			<Navbar.Section grow mt='md'>
				{NAV_LINK_ITEMS.map((type) => (
					<NavLink
						key={type}
						label={capitalize(type)}
						icon={<Icon type={type} size='1.5rem' />}
						active={currentView === type}
						onClick={() => changeView(type)}
					/>
				))}
				<NavLink
					label='Links'
					icon={<Icon type={NAV.LINKS} size='1.5rem' />}
					childrenOffset={28}
					defaultOpened
				>
					{EXTERNAL_LINKS.map(({ type, link }) => (
						<NavLink
							component='a'
							href={link}
							label={type}
							key={type}
							icon={<Icon type={type} size='1.5rem' />}
							target='_blank'
						/>
					))}
				</NavLink>
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
					<Text>Brandon Kim ©2023</Text>
					<Group sx={{ gap: rem(4) }}>
						<Text>Built with</Text>
						<Group sx={{ gap: rem(3) }}>
							<Icon type={TECH.NEXT} size='1.5rem' />
							<Icon type={TECH.TS} size='1.5rem' />
							<Icon type={TECH.REACT} size='1.5rem' />
							<Icon type={TECH.MANTINE} size='1.5rem' />
						</Group>
					</Group>
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}
