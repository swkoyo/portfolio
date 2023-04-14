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
	Text,
	useMantineTheme
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { intersection } from 'lodash';
import { useMemo, useState } from 'react';
import { TbError404 } from 'react-icons/tb';
import Icon from '../../components/Icon';
import Title from '../../components/Title';
import { NAV, TECH } from '../../constants';
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

	const theme = useMantineTheme();

	const greaterThanMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

	return (
		<>
			<Modal
				opened={opened}
				onClose={handleProjectClose}
				size={greaterThanMd ? '60%' : 'full'}
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
				<Title value="Some things I've built" />
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
				{projects.length > 0 ? (
					<Grid>
						{projects.map((project) => (
							<Grid.Col
								xs={12}
								sm={6}
								lg={4}
								key={project.title}
								onClick={() => handleProjectOpen(project)}
								sx={{
									':hover': {
										cursor: 'pointer',
										transform: 'scale(1.05)',
										transition: 'all .2s ease-in-out'
									}
								}}
							>
								<Paper shadow='xs' p='md' h='100%' mih={350}>
									<Stack h='100%' sx={{ rowGap: 30 }}>
										<Group position='apart'>
											<Icon
												type={NAV.PROJECTS}
												size='3rem'
												color={theme.colors.teal[4]}
											/>
											<Group>
												{project.links.map(
													({ type, url }) => (
														<ActionIcon
															key={type}
															component='a'
															href={url}
															color={
																theme.colorScheme ===
																'dark'
																	? undefined
																	: 'dark'
															}
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
											<Text size='xl'>
												{project.title}
											</Text>
											<Text size='md'>
												{project.description}
											</Text>
										</Stack>
										<Box sx={{ flexGrow: 1 }} />
										<Group>
											{project.tech.core.map((tech) => (
												<Text
													color={theme.colors.gray[6]}
													size='sm'
													key={tech}
												>
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
						<Stack spacing={0} align='center'>
							<TbError404 size='10rem' />
							<Text size='2xl'>No projects found!</Text>
						</Stack>
					</Center>
				)}
			</Stack>
		</>
	);
}
