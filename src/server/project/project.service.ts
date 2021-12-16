import { Injectable, Logger } from '@nestjs/common';
import { QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Project } from './project.entity';
import { IProjectRO, IProjectsRO } from './project.interface';
import { CreateProjectDto } from './dto';
import { TechnologyService } from '../technology/technology.service';
import { Technology } from '../technology/technology.entity';

@Injectable()
export class ProjectService {
	logger: Logger = new Logger(ProjectService.name);

	constructor(
		@InjectRepository(Project)
		private readonly projectRepository: EntityRepository<Project>,
		@InjectRepository(Technology)
		private readonly technologyRepository: EntityRepository<Technology>,
		private readonly technologyService: TechnologyService
	) {}

	async findAll(): Promise<IProjectsRO> {
		this.logger.debug('findAll finding all projects');

		const data = await this.projectRepository.findAll(['technologies']);

		return data;
	}

	async findOne(projectId: number): Promise<IProjectRO | undefined> {
		this.logger.debug('findOne finding project %o', { projectId });

		const project = await this.projectRepository.findOne(
			{ id: projectId },
			['technologies']
		);

		this.logger.debug('findOne found project %o', project ?? {});

		return project;
	}

	async create(dto: CreateProjectDto): Promise<IProjectRO> {
		this.logger.debug('create creating project %o', dto);

		const project = new Project(
			dto.name,
			dto.description,
			dto.repo_url,
			dto.web_url,
			dto.last_deployed
		);

		await this.projectRepository.persist(project);

		for (const technology of dto.technologies) {
			const tech = await this.technologyService.findOne(technology);
			project.technologies.add(tech);
			tech.projects.add(project);

			await this.technologyRepository.persist(tech);
		}

		await this.projectRepository.flush();
		await this.technologyRepository.flush();

		this.logger.debug('create created project %o', project);

		return project;
	}
}
