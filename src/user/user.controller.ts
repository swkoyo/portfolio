import {
	Controller,
	Logger,
	Request,
	Get,
	UseGuards,
	NotFoundException
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
	logger: Logger = new Logger(UserController.name);

	constructor(private readonly userService: UserService) {}

	@Get()
	@UseGuards(AuthGuard('jwt'))
	async findOne(@Request() req) {
		const user = await this.userService.findOneByEmail(req.user.email);
		if (!user) {
			throw new NotFoundException();
		}
		return user.toJSON();
	}
}
