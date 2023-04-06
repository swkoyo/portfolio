import {
	Box,
	Flex,
	Group,
	NavLink,
	Navbar,
	Stack,
	Text,
	rem
} from '@mantine/core';
import {
	TbUser,
	TbBriefcase,
	TbCode,
	TbExternalLink,
	TbBrandGithub,
	TbBrandLinkedin,
	TbMail,
	TbBrandNextjs,
	TbBrandTypescript,
	TbBrandReact,
	TbBrandMantine
} from 'react-icons/tb';
import Logo from '../components/Logo';
import useCurrentView from '../hooks/useCurrentView';
import { capitalize } from 'lodash';
import { EMAIL_ADDRESS, GITHUB_LINK, LINKEDIN_LINK } from '../constants';

const NAV_LINK_ITEMS = [
	{ label: 'about', icon: <TbUser size='1.5rem' /> },
	{ label: 'experience', icon: <TbBriefcase size='1.5rem' /> },
	{ label: 'projects', icon: <TbCode size='1.5rem' /> }
];

const EXTERNAL_LINKS = [
	{
		label: 'GitHub',
		link: GITHUB_LINK,
		icon: <TbBrandGithub size='1.5rem' />
	},
	{
		label: 'LinkedIn',
		link: LINKEDIN_LINK,
		icon: <TbBrandLinkedin size='1.5rem' />
	},
	{
		label: 'Email',
		link: `mailto:${EMAIL_ADDRESS}`,
		icon: <TbMail size='1.5rem' />
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
							<Logo remVal={40} />
							<Text>Brandon Kim</Text>
						</Flex>
					</Group>
				</Box>
			</Navbar.Section>
			<Navbar.Section grow mt='md'>
				{NAV_LINK_ITEMS.map(({ label, icon }) => (
					<NavLink
						key={label}
						label={capitalize(label)}
						icon={icon}
						active={currentView === label}
						onClick={() => changeView(label)}
					/>
				))}
				<NavLink
					label='Links'
					icon={<TbExternalLink size='1.5rem' />}
					childrenOffset={28}
				>
					{EXTERNAL_LINKS.map(({ label, link, icon }) => (
						<NavLink
							component='a'
							href={link}
							label={label}
							key={label}
							icon={icon}
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
							<TbBrandNextjs size='1.5rem' />
							<TbBrandTypescript size='1.5rem' />
							<TbBrandReact size='1.5rem' />
							<TbBrandMantine size='1.5rem' />
						</Group>
					</Group>
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}
