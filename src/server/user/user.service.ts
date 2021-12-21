import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from './user.entity';
import { UpdateUserDto } from './dto';
import { isNil, omitBy } from 'lodash';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class UserService {
	private readonly logger: Logger = new Logger(UserService.name);

	constructor(
		@InjectRepository(User)
		private readonly userRepository: EntityRepository<User>
	) {}

	async findOneById(id: number): Promise<User | undefined> {
		this.logger.debug('findOneById finding user %o', { id });

		const user = await this.userRepository.findOne({ id });

		this.logger.debug('findOneById response %o', user?.toJSON() ?? {});

		return user;
	}

	async findOneByEmail(email: string): Promise<User | undefined> {
		this.logger.debug('findOneByEmail finding user %o', { email });

		const user = await this.userRepository.findOne({ email });

		this.logger.debug('findOneByEmail response %o', user?.toJSON() ?? {});

		return user;
	}

	async update(body: UpdateUserDto): Promise<User> {
		this.logger.debug('update updating user');

		const user = await this.findOneById(1);

		const updateFields = omitBy(body, isNil);

		wrap(user).assign(updateFields);

		this.userRepository.flush();

		this.logger.debug('update updated user');

		return user;
	}
}
