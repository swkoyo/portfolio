import {
	ActionIcon,
	Box,
	Button,
	Flex,
	Group,
	Header,
	Text,
	rem,
	useMantineColorScheme
} from '@mantine/core';
import { TbMoonStars, TbSun } from 'react-icons/tb';
import Icon from '../components/Icon';
import MainLogo from '../components/MainLogo';
import { APP, EMAIL_ADDRESS, GITHUB_LINK, LINKEDIN_LINK } from '../constants';

export const LINKS = [
	{
		type: APP.GITHUB,
		url: GITHUB_LINK
	},
	{
		type: APP.LINKEDIN,
		url: LINKEDIN_LINK
	}
];

export default function TopBar() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const isDark = colorScheme === 'dark';

	return (
		<Header height={70} p='xs'>
			<Flex align='center' h='100%'>
				<Group position='apart'>
					<Flex align='center' gap={10}>
						<MainLogo width={rem(40)} />
						<Text>Brandon Kim</Text>
					</Flex>
				</Group>
				<Box sx={{ flexGrow: 1 }} />
				<Group position='apart'>
					<ActionIcon
						variant='outline'
						color={isDark ? 'secondary' : 'brand'}
						onClick={() => toggleColorScheme()}
						title='Toggle color scheme'
					>
						{isDark ? (
							<TbSun size='1.1rem' />
						) : (
							<TbMoonStars size='1.1rem' />
						)}
					</ActionIcon>
					{LINKS.map(({ type, url }) => (
						<ActionIcon
							component='a'
							href={url}
							target='_blank'
							key={type}
						>
							<Icon type={type} size='2rem' />
						</ActionIcon>
					))}
					<Button
						component='a'
						href={`mailto:${EMAIL_ADDRESS}`}
						target='_blank'
						leftIcon={<Icon type={APP.EMAIL} size='2rem' />}
					>
						<Text>Contact</Text>
					</Button>
				</Group>
			</Flex>
		</Header>
	);
}
