import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Project } from './project.entity';
import { IProjectRO, IProjectsRO } from './project.interface';
import { CreateProjectDto } from './dto';
import { validate } from 'class-validator';

@Injectable()
export class ProjectService {
	constructor(
		@InjectRepository(Project)
		private readonly projectRepository: EntityRepository<Project>
	) {}

	async findAll(): Promise<IProjectsRO> {
		const qb = this.projectRepository
			.createQueryBuilder('a')
			.select('a.*')
			.orderBy({ id: QueryOrder.DESC });

		const { count } = await qb.clone().count('id', true).execute('get');
		const projects = await qb.getResult();

		return { count, projects };
	}

	async findOne(projectId: number): Promise<IProjectRO> {
		return this.projectRepository.findOneOrFail(projectId);
	}

	async create(dto: CreateProjectDto): Promise<IProjectRO> {
		const project = new Project(
			dto.name,
			dto.description,
			dto.repo_url,
			dto.web_url,
			dto.languages,
			dto.technologies,
			dto.last_deployed
		);

		const errors = await validate(project);

		if (errors.length > 0) {
			throw new HttpException(
				'Input data invalid',
				HttpStatus.BAD_REQUEST
			);
		}

		await this.projectRepository.persistAndFlush(project);

		return project;
	}
}
