import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Technology } from './technology.entity';
import { CreateTechnologyDto } from './dto';
import { ITechnologyRO, ITechnologiesRO } from './technology.interface';

@Injectable()
export class TechnologyService {
	logger: Logger = new Logger(TechnologyService.name);

	constructor(
		@InjectRepository(Technology)
		private readonly technologyRepository: EntityRepository<Technology>
	) {}

	async findAll(): Promise<ITechnologiesRO> {
		this.logger.debug('findAll finding all technologies');

		const data = await this.technologyRepository.findAll(['projects']);

		return data;
	}

	async findOneByName(name: string): Promise<ITechnologyRO | undefined> {
		this.logger.debug('findOne finding technology %o', { name });

		const technology = await this.technologyRepository.findOne({
			name
		});

		this.logger.debug('findOne found technology %o', technology ?? {});

		return technology;
	}

	async create(dto: CreateTechnologyDto): Promise<ITechnologyRO> {
		this.logger.debug('create creating technology %o', dto);

		const technology = new Technology(dto.name, dto.logo);

		await this.technologyRepository.persistAndFlush(technology);

		this.logger.debug('create created technology %o', technology);

		return technology;
	}
}
