import {
	ActionIcon,
	Grid,
	Group,
	MultiSelect,
	Paper,
	Text
} from '@mantine/core';
import { useState } from 'react';
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

	console.log(techFilters);

	return (
		<Grid>
			<Grid.Col span={12}>
				<MultiSelect
					data={techData}
					value={techFilters}
					onChange={(value: TECH[]) => setTechFilters(value)}
					valueComponent={SelectValue}
					itemComponent={SelectItem}
					searchable
					placeholder='Filter projects by technologies used'
					label='Technologies Used'
					clearable
				/>
			</Grid.Col>
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
