import {
	Controller,
	Logger,
	Request,
	Get,
	NotFoundException,
	Param,
	Post,
	Body,
	Delete,
	UseGuards
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { IUserRO } from './user.interface';

@Controller('user')
export class UserController {
	logger: Logger = new Logger(UserController.name);

	constructor(private readonly userService: UserService) {}

	@Get()
	@UseGuards(AuthGuard('jwt'))
	async findOne(@Request() request): Promise<IUserRO> {
		const user = await this.userService.findOneByEmail(request.user.email);
		return user.toJSON();
	}
}
