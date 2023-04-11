import { Anchor, Grid, Group, List, Stack, Tabs, Text } from '@mantine/core';
import { TbArrowBigRightLine } from 'react-icons/tb';
import Icon from '../../components/Icon';
import { JOBS } from './data';

export default function Experience() {
	return (
		<Stack sx={{ rowGap: 30 }}>
			<Text size='xl'>Where I&apos;ve worked</Text>
			<Tabs defaultValue={JOBS[0].title} orientation='vertical'>
				<Tabs.List>
					{JOBS.map(({ title }) => (
						<Tabs.Tab value={title} key={title}>
							{title}
						</Tabs.Tab>
					))}
				</Tabs.List>
				{JOBS.map(
					({
						title,
						role,
						start_date,
						end_date,
						tech_stack,
						tasks,
						url
					}) => (
						<Tabs.Panel pl='xl' key={title} value={title}>
							<Stack>
								<Stack sx={{ rowGap: 5 }}>
									<Text>
										{role}{' '}
										<Anchor href={url} target='_blank'>
											@{title}
										</Anchor>
									</Text>
									<Text>
										{start_date} - {end_date || 'Current'}
									</Text>
								</Stack>
								<Grid>
									{tech_stack.map((tech) => (
										<Grid.Col span={3} key={tech}>
											<Group spacing='xs'>
												<Icon
													type={tech}
													size='1.2rem'
												/>
												<Text size='sm'>{tech}</Text>
											</Group>
										</Grid.Col>
									))}
								</Grid>
								<List icon={<TbArrowBigRightLine />}>
									{tasks.map((task) => (
										<List.Item key={task}>{task}</List.Item>
									))}
								</List>
							</Stack>
						</Tabs.Panel>
					)
				)}
			</Tabs>
		</Stack>
	);
}
