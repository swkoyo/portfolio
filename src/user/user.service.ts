import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from './user.entity';
import { IUserRO } from './user.interface';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: EntityRepository<User>
	) {}

	async count(): Promise<number> {
		return this.userRepository.count();
	}

	async findOneByEmail(email: string): Promise<IUserRO> {
		const user = await this.userRepository.findOneOrFail({ email });
		return { user };
	}
}
