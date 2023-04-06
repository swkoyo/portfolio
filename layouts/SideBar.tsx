import { Box, Flex, Group, NavLink, Navbar, Text, rem } from '@mantine/core';
import { TbUser, TbBriefcase, TbCode, TbExternalLink } from 'react-icons/tb';
import Logo from '../components/Logo';

const NAV_LINKS = [
	{ label: 'About', icon: <TbUser size='1.5rem' /> },
	{ label: 'Experience', icon: <TbBriefcase size='1.5rem' /> },
	{ label: 'Projects', icon: <TbCode size='1.5rem' /> },
	{ label: 'Links', icon: <TbExternalLink size='1.5rem' /> }
];

export default function SideBar() {
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
							<Logo remVal={40} />
							<Text>Brandon Kim</Text>
						</Flex>
					</Group>
				</Box>
			</Navbar.Section>
			<Navbar.Section grow mt='md'>
				{NAV_LINKS.map(({ label, icon }) => (
					<NavLink key={label} label={label} icon={icon} />
				))}
			</Navbar.Section>
			<Navbar.Section>
				<Text>Built With NextJS TS React Mantine</Text>
			</Navbar.Section>
		</Navbar>
	);
}
