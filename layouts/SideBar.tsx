import { NavLink, Navbar, Stack, Text } from '@mantine/core';
import type { NextComponentType } from 'next';
import { TbUser, TbBriefcase, TbCode } from 'react-icons/tb';

const NAV_LINKS = [
	{ label: 'About', icon: <TbUser /> },
	{ label: 'Experience', icon: <TbBriefcase /> },
	{ label: 'Projects', icon: <TbCode /> }
];

const SideBar: NextComponentType = () => {
	return (
		<Navbar width={{ base: 300 }}>
			<Navbar.Section grow>
				{NAV_LINKS.map(({ label, icon }) => (
					<NavLink key={label} label={label} icon={icon} />
				))}
			</Navbar.Section>
			<Navbar.Section>
				<Stack>
					<Text>Brandon Kim ©2023</Text>
					<Text>Built With NextJS TS React Mantine</Text>
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
};

export default SideBar;
