import {
	BadRequestException,
	Injectable,
	Logger,
	NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Technology } from './technology.entity';
import { CreateTechnologyDto, UpdateTechnologyDto } from './dto';
import { ITechnologyRO, ITechnologiesRO } from './technology.interface';
import { isNil, omitBy } from 'lodash';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class TechnologyService {
	logger: Logger = new Logger(TechnologyService.name);

	constructor(
		@InjectRepository(Technology)
		private readonly technologyRepository: EntityRepository<Technology>
	) {}

	async findAll(): Promise<ITechnologiesRO> {
		this.logger.debug('findAll finding all technologies');

		const techs = await this.technologyRepository.findAll({
			populate: ['projects'],
			fields: ['name', 'logo_url', 'projects.name', 'projects.tagline']
		});

		this.logger.debug('findOne found technologies %o', {
			count: techs.length
		});

		return techs;
	}

	async findOneById(id: number): Promise<ITechnologyRO | undefined> {
		this.logger.debug('findOneById finding technology %o', { id });

		const technology = await this.technologyRepository.findOne(
			{
				id
			},
			{
				populate: ['projects'],
				fields: [
					'name',
					'logo_url',
					'projects.name',
					'projects.tagline'
				]
			}
		);

		this.logger.debug('findOneById found technology %o', technology ?? {});

		return technology;
	}

	async findOneByName(name: string): Promise<ITechnologyRO | undefined> {
		this.logger.debug('findOneByName finding technology %o', { name });

		const technology = await this.technologyRepository.findOne(
			{
				name
			},
			{
				populate: ['projects'],
				fields: [
					'name',
					'logo_url',
					'projects.name',
					'projects.tagline'
				]
			}
		);

		this.logger.debug(
			'findOneByName found technology %o',
			technology ?? {}
		);

		return technology;
	}

	async removeById(id: number): Promise<ITechnologyRO> {
		this.logger.debug('removeById removing technology %o', { id });

		const technology = await this.findOneById(id);

		if (!technology) {
			throw new NotFoundException(`Technology with id ${id} not found`);
		}

		await this.technologyRepository.removeAndFlush(technology);

		return technology;
	}

	async removeByName(name: string): Promise<ITechnologyRO> {
		this.logger.debug('removeByName removing technology %o', { name });

		const technology = await this.findOneByName(name);

		if (!technology) {
			throw new NotFoundException(`Technology "${name}" not found`);
		}

		await this.technologyRepository.removeAndFlush(technology);

		return technology;
	}

	async create(dto: CreateTechnologyDto): Promise<ITechnologyRO> {
		this.logger.debug('create creating technology %o', dto);

		const existingTech = await this.findOneByName(dto.name);

		if (existingTech) {
			throw new BadRequestException(
				`Technology ${dto.name} already exists`
			);
		}

		const technology = new Technology(dto.name, dto.logo_url);

		await this.technologyRepository.persistAndFlush(technology);

		this.logger.debug('create created technology %o', technology);

		return technology;
	}

	async update({ id, data }: UpdateTechnologyDto): Promise<ITechnologyRO> {
		this.logger.debug('update updating technology %o', { id });

		const tech = await this.findOneById(id);

		if (!tech) {
			throw new NotFoundException(`Technology with id ${id} not found`);
		}

		const updateFields = omitBy(data, isNil);

		if (updateFields.name && updateFields.name !== tech.name) {
			const existingTech = await this.findOneByName(updateFields.name);
			if (existingTech) {
				throw new BadRequestException(
					`Technology with given updated name "${updateFields.name}" already exists`
				);
			}
		}

		wrap(tech).assign(updateFields);

		await this.technologyRepository.flush();

		this.logger.debug('update updated technology %o', { id });

		return tech;
	}
}
