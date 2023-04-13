import { Anchor, Grid, Group, List, Stack, Tabs, Text } from '@mantine/core';
import { TbArrowBigRightLine } from 'react-icons/tb';
import Icon from '../../components/Icon';
import { JOBS } from './data';

export default function Experience() {
	return (
		<Stack sx={{ rowGap: 30 }}>
			<Text size='2xl' weight='bold'>
				Where I&apos;ve worked
			</Text>
			<Tabs defaultValue={JOBS[0].title} orientation='vertical'>
				<Tabs.List>
					{JOBS.map(({ title }) => (
						<Tabs.Tab value={title} key={title}>
							<Text size='md'>{title}</Text>
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
						<Tabs.Panel p='xl' key={title} value={title}>
							<Stack spacing='xl'>
								<Stack sx={{ rowGap: 5 }}>
									<Text size='lg'>
										{role}{' '}
										<Anchor
											weight='bold'
											href={url}
											target='_blank'
										>
											@{title}
										</Anchor>
									</Text>
									<Text size='md'>
										{start_date} - {end_date || 'Current'}
									</Text>
								</Stack>
								<List
									spacing='sm'
									icon={<TbArrowBigRightLine size='1.2rem' />}
								>
									{tasks.map((task) => (
										<List.Item key={task}>
											<Text size='lg'>{task}</Text>
										</List.Item>
									))}
								</List>
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
							</Stack>
						</Tabs.Panel>
					)
				)}
			</Tabs>
		</Stack>
	);
}
