import {
	Controller,
	Request,
	Get,
	UseGuards,
	NotFoundException,
	Logger
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
	private readonly logger: Logger = new Logger(UserController.name);

	constructor(private readonly userService: UserService) {}

	@Get()
	@UseGuards(AuthGuard('jwt'))
	async findOne(@Request() req) {
		const user = await this.userService.findOneByEmail(req.user.email);

		if (!user) {
			this.logger.error('findOne user not found %o', {
				email: req.user.email
			});

			throw new NotFoundException();
		}

		return user.toJSON();
	}
}
