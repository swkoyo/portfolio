import {
	Controller,
	Request,
	Get,
	UseGuards,
	NotFoundException,
	Logger
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
	private readonly logger: Logger = new Logger(UserController.name);

	constructor(private readonly userService: UserService) {}

	@Get()
	async findOne() {
		const user = await this.userService.findOneById(1);

		if (!user) {
			this.logger.error('findOne user not found %o', { id: 1 });

			throw new NotFoundException();
		}

		return user.toJSON();
	}
}
