import {
	Anchor,
	Grid,
	Group,
	List,
	Stack,
	Tabs,
	Text,
	useMantineTheme
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { TbArrowBigRightLine } from 'react-icons/tb';
import Icon from '../../components/Icon';
import Title from '../../components/Title';
import { JOBS } from './data';

export default function Experience() {
	const theme = useMantineTheme();

	const greaterThanSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
	return (
		<Stack sx={{ rowGap: 30 }}>
			<Title value="Where I've worked" />
			<Tabs
				defaultValue={JOBS[0].title}
				orientation={greaterThanSm ? 'vertical' : 'horizontal'}
			>
				<Tabs.List>
					{JOBS.map(({ title }) => (
						<Tabs.Tab value={title} key={title}>
							<Text size={greaterThanSm ? 'md' : 'xs'}>
								{title}
							</Text>
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
									icon={
										<TbArrowBigRightLine
											color={theme.colors.teal[5]}
											size='1.2rem'
										/>
									}
								>
									{tasks.map((task) => (
										<List.Item key={task}>
											<Text size='lg'>{task}</Text>
										</List.Item>
									))}
								</List>
								<Grid>
									{tech_stack.map((tech) => (
										<Grid.Col
											xs={6}
											sm={4}
											md={3}
											key={tech}
										>
											<Group noWrap spacing='xs'>
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
