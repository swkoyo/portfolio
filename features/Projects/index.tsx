import {
	ActionIcon,
	Box,
	Center,
	Grid,
	Group,
	Modal,
	MultiSelect,
	Paper,
	Stack,
	Text
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { intersection } from 'lodash';
import { useMemo, useState } from 'react';
import Icon from '../../components/Icon';
import { TECH } from '../../constants';
import { Project } from '../../types';
import FeaturedProject from './FeaturedProject';
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
				({ tech: { full } }) =>
					intersection(full, techFilters).length ===
					techFilters.length
			);
		}
	}, [techFilters]);

	const [featuredProject, setFeaturedProject] = useState<Project | null>(
		null
	);

	const [opened, { open, close }] = useDisclosure(false);

	const handleProjectOpen = (project: Project) => {
		setFeaturedProject(project);
		open();
	};

	const handleProjectClose = () => {
		close();
	};

	const TRANSITION_DURATION = 500;

	return (
		<>
			<Modal
				opened={opened}
				onClose={handleProjectClose}
				size='60%'
				centered
				transitionProps={{ duration: TRANSITION_DURATION }}
				withCloseButton={false}
			>
				{featuredProject ? (
					<FeaturedProject
						TRANSITION_DURATION={TRANSITION_DURATION}
						project={featuredProject}
						handleProjectClose={handleProjectClose}
					/>
				) : null}
			</Modal>
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
						{projects.map((project) => (
							<Grid.Col
								span={4}
								key={project.title}
								onClick={() => handleProjectOpen(project)}
							>
								<Paper shadow='xs' p='md' h='100%' mih={350}>
									<Stack h='100%' sx={{ rowGap: 30 }}>
										<Group position='apart'>
											<Icon size='3rem' />
											<Group>
												{project.links.map(
													({ type, url }) => (
														<ActionIcon
															key={type}
															component='a'
															href={url}
															target='_blank'
															onClick={(event) =>
																event.stopPropagation()
															}
														>
															<Icon
																type={type}
																size='1.5rem'
															/>
														</ActionIcon>
													)
												)}
											</Group>
										</Group>
										<Stack>
											<Text size='lg'>
												{project.title}
											</Text>
											<Text size='sm'>
												{project.description}
											</Text>
										</Stack>
										<Box sx={{ flexGrow: 1 }} />
										<Group>
											{project.tech.core.map((tech) => (
												<Text size='xs' key={tech}>
													{tech}
												</Text>
											))}
										</Group>
									</Stack>
								</Paper>
							</Grid.Col>
						))}
					</Grid>
				) : (
					<Center>
						<Text>No projects found!</Text>
					</Center>
				)}
			</Stack>
		</>
	);
}
