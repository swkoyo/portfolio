import {
	ActionIcon,
	Box,
	Center,
	Grid,
	Group,
	MultiSelect,
	Paper,
	Stack,
	Text
} from '@mantine/core';
import { intersection } from 'lodash';
import { useMemo, useState } from 'react';
import Icon from '../../components/Icon';
import { TECH } from '../../constants';
import { SelectItem, SelectValue } from './ProjectTechSelectHelpers';
import { PROJECTS } from './data';

const techData = (Object.values(TECH) as Array<keyof typeof TECH>).map(
	(key) => ({
		value: key,
		label: key
	})
);

export default function Projects() {
	const [techFilters, setTechFilters] = useState<TECH[]>([]);
	const projects = useMemo(() => {
		if (techFilters.length === 0) {
			return PROJECTS;
		} else {
			return PROJECTS.filter(
				({ tech_stack }) =>
					intersection(tech_stack, techFilters).length ===
					techFilters.length
			);
		}
	}, [techFilters]);

	return (
		<Stack sx={{ rowGap: 30 }}>
			<Stack>
				<Text size='xl'>Some things I&apos;ve built</Text>
				<MultiSelect
					data={techData}
					value={techFilters}
					onChange={(value: TECH[]) => setTechFilters(value)}
					valueComponent={SelectValue}
					itemComponent={SelectItem}
					searchable
					placeholder='Filter projects by technologies used'
					clearable
				/>
			</Stack>
			{projects.length > 0 ? (
				<Grid>
					{projects.map(
						({ title, links, description, tech_stack }) => (
							<Grid.Col span={4} key={title}>
								<Paper shadow='xs' p='md' h='100%' mih={350}>
									<Stack h='100%' sx={{ rowGap: 30 }}>
										<Group position='apart'>
											<Icon size='3rem' />
											<Group>
												{links.map(({ type, url }) => (
													<ActionIcon key={type}>
														<Icon
															type={type}
															size='1.5rem'
														/>
													</ActionIcon>
												))}
											</Group>
										</Group>
										<Stack>
											<Text size='lg'>{title}</Text>
											<Text size='sm'>{description}</Text>
										</Stack>
										<Box sx={{ flexGrow: 1 }} />
										<Group>
											{tech_stack
												.slice(0, 3)
												.map((tech) => (
													<Text size='xs' key={tech}>
														{tech}
													</Text>
												))}
										</Group>
									</Stack>
								</Paper>
							</Grid.Col>
						)
					)}
				</Grid>
			) : (
				<Center>
					<Text>No projects found!</Text>
				</Center>
			)}
		</Stack>
	);
}
