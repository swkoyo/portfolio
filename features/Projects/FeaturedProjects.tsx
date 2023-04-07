import { Box, Flex, Group, Image, Stack, Text, rem } from '@mantine/core';
import Icon from '../../components/Icon';
import { PROJECTS } from './data';

export default function FeaturedProjects() {
	return (
		<Box>
			{PROJECTS.filter((project) => project.featured).map(
				({ title, image, description, tech_stack, links }, i) => (
					<Flex
						key={title}
						pos='sticky'
						align='center'
						direction={i % 2 !== 0 ? 'row-reverse' : 'row'}
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
							right={i % 2 !== 0 ? undefined : 0}
							left={i % 2 !== 0 ? 0 : undefined}
							sx={{ alignItems: i % 2 !== 0 ? 'start' : 'end' }}
						>
							<Text>Featured Project</Text>
							<Text>{title}</Text>
							<Box
								p='sm'
								w={rem(500)}
								sx={{
									textAlign: i % 2 !== 0 ? 'left' : 'right',
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
									<Icon
										key={type}
										type={type}
										size='1.5rem'
									/>
								))}
							</Group>
						</Stack>
					</Flex>
				)
			)}
		</Box>
	);
}
