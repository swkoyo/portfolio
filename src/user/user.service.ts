import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from './user.entity';

@Injectable()
export class UserService {
	private readonly logger: Logger = new Logger(UserService.name);

	constructor(
		@InjectRepository(User)
		private readonly userRepository: EntityRepository<User>
	) {}

	async findOneByEmail(email: string): Promise<User | undefined> {
		this.logger.debug('findOneByEmail finding user %o', { email });

		const user = await this.userRepository.findOne({ email });

		this.logger.debug('findOneByEmail response %o', user?.toJSON() ?? {});

		return user;
	}
}
