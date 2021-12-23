import {
	Controller,
	Get,
	UseGuards,
	NotFoundException,
	Logger,
	Put,
	Body
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from './dto';
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

			throw new NotFoundException('Admin account not found');
		}

		return user.toJSON();
	}

	@Put()
	@UseGuards(AuthGuard('jwt'))
	async update(@Body() body: UpdateUserDto) {
		return this.userService.update(body);
	}
}
