import { Injectable, Logger } from '@nestjs/common';
import { QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Project } from './project.entity';
import { IProjectRO, IProjectsRO } from './project.interface';
import { CreateProjectDto } from './dto';
import { TechnologyService } from '../technology/technology.service';

@Injectable()
export class ProjectService {
	logger: Logger = new Logger(ProjectService.name);

	constructor(
		@InjectRepository(Project)
		private readonly projectRepository: EntityRepository<Project>,
		private readonly technologyService: TechnologyService
	) {}

	async findAll(): Promise<IProjectsRO> {
		this.logger.debug('findAll finding all projects');

		const count = await this.projectRepository.count();

		const qb = this.projectRepository
			.createQueryBuilder('a')
			.select('a.*')
			.orderBy({ id: QueryOrder.DESC });
		const projects = await qb.getResult();

		this.logger.debug('findAll found %o', { count });

		return { count, projects };
	}

	async findOne(projectId: number): Promise<IProjectRO | undefined> {
		this.logger.debug('findOne finding project %o', { projectId });

		const project = await this.projectRepository.findOne({ id: projectId });

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

		for (const technology of dto.technologies) {
			const tech = await this.technologyService.findOne(technology);
			project.technologies.add(tech);
		}

		await this.projectRepository.persistAndFlush(project);

		this.logger.debug('create created project %o', project);

		return project;
	}
}
