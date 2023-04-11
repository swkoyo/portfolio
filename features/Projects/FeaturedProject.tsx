import {
	Box,
	CloseButton,
	Flex,
	Grid,
	Group,
	Image,
	Stack,
	Text
} from '@mantine/core';
import { isEmpty, pickBy, startCase } from 'lodash';
import Icon from '../../components/Icon';
import { Project } from '../../types';
import { TECH_CATEGORIES } from './data';

export default function FeaturedProject({
	project: { title, image, description, tech, links },
	handleProjectClose
}: {
	project: Project;
	handleProjectClose: () => void;
}) {
	const tech_used = pickBy(
		tech,
		(value, key) => TECH_CATEGORIES.includes(key) && !isEmpty(value)
	);

	return (
		<Stack>
			<Flex>
				<Group>
					<Icon size='2rem' />
					<Text size='xl'>{title}</Text>
				</Group>
				<Box sx={{ flexGrow: 1 }} />
				<Group>
					{links.map(({ type, url }) => (
						<Icon key={type} type={type} size='1.5rem' />
					))}
					<CloseButton
						size='lg'
						onClick={() => handleProjectClose()}
					/>
				</Group>
			</Flex>
			<Text size='sm'>{description}</Text>
			<Image src={image} alt={title} width='100%' height='100%' />
			<Text size='xl'>Tech Stack</Text>
			<Grid>
				{Object.entries(tech_used).map(([key, value]) => (
					<Grid.Col span={6} key={key}>
						<Stack spacing='xs'>
							<Text size='md'>{startCase(key)}</Text>
							<Flex gap={14} sx={{ overflow: 'wrap' }}>
								{value.map((tech) => (
									<Group key={tech} spacing='xs'>
										<Icon size='1.2rem' type={tech} />
										<Text size='sm'>{tech}</Text>
									</Group>
								))}
							</Flex>
						</Stack>
					</Grid.Col>
				))}
			</Grid>
		</Stack>
	);
}
