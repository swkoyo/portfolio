import {
	ActionIcon,
	Box,
	Button,
	Flex,
	Group,
	Header,
	Text,
	rem,
	useMantineColorScheme,
	useMantineTheme
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
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

	const theme = useMantineTheme();

	const greaterThanXs = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`);

	return (
		<Header height={70} p='xs'>
			<Flex align='center' h='100%'>
				<Group position='apart'>
					<Flex align='center' gap={10}>
						<MainLogo width={rem(greaterThanXs ? 40 : 30)} />
						<Text size={greaterThanXs ? '2xl' : 'lg'} weight='bold'>
							Brandon Kim
						</Text>
					</Flex>
				</Group>
				<Box sx={{ flexGrow: 1 }} />
				<Group
					position='apart'
					align='center'
					spacing={greaterThanXs ? 'md' : 8}
				>
					<ActionIcon
						variant='outline'
						size={greaterThanXs ? 'md' : 'sm'}
						color={isDark ? 'orange' : 'teal'}
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
							size={greaterThanXs ? 'md' : 'sm'}
							target='_blank'
							key={type}
							color={
								theme.colorScheme === 'dark'
									? undefined
									: 'dark'
							}
						>
							<Icon type={type} size='2rem' />
						</ActionIcon>
					))}
					{greaterThanXs ? (
						<Button
							component='a'
							href={`mailto:${EMAIL_ADDRESS}`}
							target='_blank'
							leftIcon={<Icon type={APP.EMAIL} size='1.5rem' />}
						>
							<Text size='md'>Contact</Text>
						</Button>
					) : (
						<ActionIcon
							component='a'
							href={`mailto:${EMAIL_ADDRESS}`}
							target='_blank'
							color={theme.colors.teal[5]}
							variant='filled'
						>
							<Icon type={APP.EMAIL} size='1.5rem' />
						</ActionIcon>
					)}
				</Group>
			</Flex>
		</Header>
	);
}
