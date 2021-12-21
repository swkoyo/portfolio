import {
	BadRequestException,
	Injectable,
	Logger,
	NotFoundException
} from '@nestjs/common';
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

		const projects = await this.projectRepository.findAll(['technologies']);

		this.logger.debug('findOne found projects %o', {
			count: projects.length
		});

		return projects;
	}

	async findOneByName(name: string): Promise<IProjectRO | undefined> {
		this.logger.debug('findOneByName finding project %o', { name });

		const project = await this.projectRepository.findOne({ name }, [
			'technologies'
		]);

		this.logger.debug('findOneByName found project %o', project ?? {});

		return project;
	}

	async removeByName(name: string): Promise<IProjectRO> {
		this.logger.debug('removeByName removing project %o', { name });

		const project = await this.findOneByName(name);

		if (!project) {
			throw new NotFoundException();
		}

		await this.projectRepository.removeAndFlush(project);

		return project;
	}

	async create(dto: CreateProjectDto): Promise<IProjectRO> {
		this.logger.debug('create creating project %o', dto);

		const existingProject = await this.findOneByName(dto.name);

		if (existingProject) {
			throw new BadRequestException();
		}

		if (dto.technologies.length > 0) {
			for (const technology of dto.technologies) {
				const tech = await this.technologyService.findOneByName(
					technology
				);

				if (!tech) {
					throw new BadRequestException();
				}
			}
		}

		const project = new Project(
			dto.name,
			dto.description,
			dto.repo_url,
			dto.web_url,
			dto.last_deployed
		);

		await this.projectRepository.persist(project);

		for (const technology of dto.technologies) {
			const tech = await this.technologyService.findOneByName(technology);
			project.technologies.add(tech as Technology);
			tech.projects.add(project);

			await this.technologyRepository.persist(tech);
		}

		await this.projectRepository.flush();
		await this.technologyRepository.flush();

		this.logger.debug('create created project %o', project);

		return project;
	}
}
