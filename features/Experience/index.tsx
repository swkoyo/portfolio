import { Group, List, Tabs, Text } from '@mantine/core';
import { TbArrowBigRightLine } from 'react-icons/tb';
import Icon from '../../components/Icon';
import { JOBS } from './data';

export default function Experience() {
	return (
		<Tabs defaultValue={JOBS[0].title} orientation='vertical'>
			<Tabs.List>
				{JOBS.map(({ title }) => (
					<Tabs.Tab value={title} key={title}>
						{title}
					</Tabs.Tab>
				))}
			</Tabs.List>
			{JOBS.map(({ title, role, dates, tech_stack, tasks }) => (
				<Tabs.Panel key={title} value={title}>
					<Group>
						<Text>{role}</Text>
						<Text>@{title}</Text>
					</Group>
					<Text>{dates}</Text>
					<List icon={<TbArrowBigRightLine />}>
						{tasks.map((task) => (
							<List.Item key={task}>{task}</List.Item>
						))}
					</List>
					{tech_stack.map((tech) => (
						<Group key={tech}>
							<Icon type={tech} size='1.5rem' />
							<Text>{tech}</Text>
						</Group>
					))}
				</Tabs.Panel>
			))}
		</Tabs>
	);
}
