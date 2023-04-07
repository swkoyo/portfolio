import { ActionIcon, Grid, Group, Paper, Text } from '@mantine/core';
import Icon from '../../components/Icon';
import { PROJECTS } from './data';

export default function Projects() {
	return (
		<Grid>
			{PROJECTS.map(({ title, links, description, tech_stack }) => (
				<Grid.Col span={4} key={title}>
					<Paper shadow='xs' p='md' mih={350}>
						<Group position='apart'>
							<Icon size='3rem' />
							<Group>
								{links.map(({ type, url }) => (
									<ActionIcon key={type}>
										<Icon type={type} />
									</ActionIcon>
								))}
							</Group>
						</Group>
						<Text>{title}</Text>
						<Text>{description}</Text>
						<Group>
							{tech_stack.slice(0, 3).map((tech) => (
								<Text key={tech}>{tech}</Text>
							))}
						</Group>
					</Paper>
				</Grid.Col>
			))}
		</Grid>
	);
}
