import {
	ActionIcon,
	Flex,
	Group,
	NavLink,
	Navbar,
	Stack,
	Text,
	rem,
	useMantineTheme
} from '@mantine/core';
import { capitalize } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { APP, NAV } from '../../constants';
import Icon from '../Icon';

const NAV_LINK_ITEMS = [
	{ value: NAV.HOME, href: '/' },
	{ value: NAV.PROJECTS, href: '/projects' },
	{ value: NAV.RESUME, href: '/resume' }
];

export default function SideBar() {
	const theme = useMantineTheme();
	const router = useRouter();

	return (
		<Navbar width={{ base: 70, lg: 300, md: 230 }} p='xs'>
			<Navbar.Section grow mt='xs'>
				{NAV_LINK_ITEMS.map(({ value, href }) => (
					<NavLink
						component={Link}
						key={value}
						label={<Text size='lg'>{capitalize(value)}</Text>}
						icon={<Icon type={value} size='1.5rem' />}
						href={href}
						active={router.pathname === href}
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
					<Group sx={{ gap: rem(2) }}>
						<Text size='xs'>Inspired by Brittany Chiang</Text>
						<Flex>
							<ActionIcon
								component='a'
								size='sm'
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
								size='sm'
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
						</Flex>
					</Group>
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}
