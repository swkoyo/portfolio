import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
	logger: Logger = new Logger(AuthService.name);

	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
	) {}

	async validateUser(email: string, password: string) {
		this.logger.verbose('validateUser validating user %o', { email });

		const user = await this.userService.findOneByEmail(email);

		if (user && (await user.validatePassword(password))) {
			this.logger.verbose('validateUser validated user %o', { email });

			return user.toJSON();
		}

		this.logger.verbose('validateUser user not validated %o', { email });

		return null;
	}

	async createToken(user: User) {
		this.logger.verbose('createToken for user %o', {
			id: user.id,
			email: user.email
		});

		const access_token = this.jwtService.sign({
			sub: user.id,
			email: user.email
		});

		return {
			access_token
		};
	}
}
