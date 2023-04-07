import {
	ActionIcon,
	Box,
	Button,
	Flex,
	Group,
	Header,
	Text,
	rem
} from '@mantine/core';
import Icon from '../components/Icon';
import MainLogo from '../components/MainLogo';
import { APP, GITHUB_LINK, LINKEDIN_LINK } from '../constants';

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
					{LINKS.map(({ type, url }) => (
						<ActionIcon key={type}>
							<Icon type={type} size='2rem' />
						</ActionIcon>
					))}
					<Button leftIcon={<Icon type={APP.EMAIL} size='2rem' />}>
						<Text>Contact</Text>
					</Button>
				</Group>
			</Flex>
		</Header>
	);
}
