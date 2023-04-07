import { Box, Flex, Group, Image, Stack, Text, rem } from '@mantine/core';
// import Image from 'next/image';
import Icon from '../../components/Icon';
import { APP, TECH } from '../../constants';

interface Props {
	project: {
		title: string;
		featured: boolean;
		description: string;
		tech_stack: TECH[];
		links: {
			type: APP;
			url: string;
		}[];
		image: string;
	};
	flip?: boolean;
}

export default function FeaturedProject({
	project: { title, description, tech_stack, links, image },
	flip = false
}: Props) {
	return (
		<Flex
			pos='sticky'
			align='center'
			direction={flip ? 'row-reverse' : 'row'}
		>
			<Image
				src={image}
				alt={title}
				width={rem(500)}
				height={rem(300)}
				sx={(theme) => ({
					filter: 'grayscale(100%)'
				})}
			/>
			<Stack
				pos='absolute'
				right={flip ? undefined : 0}
				left={flip ? 0 : undefined}
				sx={{ alignItems: flip ? 'start' : 'end' }}
			>
				<Text>Featured Project</Text>
				<Text>{title}</Text>
				<Box
					p='sm'
					w={rem(500)}
					sx={{
						textAlign: flip ? 'left' : 'right',
						background: 'blue'
					}}
				>
					<Text>{description}</Text>
				</Box>
				<Group>
					{tech_stack.slice(0, 5).map((tech) => (
						<Text key={tech}>{tech}</Text>
					))}
				</Group>
				<Group>
					{links.map(({ type, url }) => (
						<Icon key={type} type={type} size='1.5rem' />
					))}
				</Group>
			</Stack>
		</Flex>
	);
}
