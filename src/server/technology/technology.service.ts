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
			fields: ['name', 'logo', 'projects.name', 'projects.description']
		});

		this.logger.debug('findOne found technologies %o', {
			count: techs.length
		});

		return techs;
	}

	async findOneByName(name: string): Promise<ITechnologyRO | undefined> {
		this.logger.debug('findOne finding technology %o', { name });

		const technology = await this.technologyRepository.findOne(
			{
				name
			},
			{
				populate: ['projects'],
				fields: [
					'name',
					'logo',
					'projects.name',
					'projects.description'
				]
			}
		);

		this.logger.debug('findOne found technology %o', technology ?? {});

		return technology;
	}

	async removeByName(name: string): Promise<ITechnologyRO> {
		this.logger.debug('removeByName removing technology %o', { name });

		const technology = await this.findOneByName(name);

		if (!technology) {
			throw new NotFoundException();
		}

		await this.technologyRepository.removeAndFlush(technology);

		return technology;
	}

	async create(dto: CreateTechnologyDto): Promise<ITechnologyRO> {
		this.logger.debug('create creating technology %o', dto);

		const existingTech = await this.findOneByName(dto.name);

		if (existingTech) {
			throw new BadRequestException();
		}

		const technology = new Technology(dto.name, dto.logo);

		await this.technologyRepository.persistAndFlush(technology);

		this.logger.debug('create created technology %o', technology);

		return technology;
	}

	async update({ name, data }: UpdateTechnologyDto): Promise<ITechnologyRO> {
		this.logger.debug('update updating technology %o', { name });

		const tech = await this.findOneByName(name);

		if (!tech) {
			throw new NotFoundException();
		}

		const updateFields = omitBy(data, isNil);

		wrap(tech).assign(updateFields);

		this.technologyRepository.flush();

		this.logger.debug('update updated technology %o', { name });

		return tech;
	}
}
