import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
	) {}

	async validateUser(email: string, password: string) {
		const user = await this.userService.findOneByEmail(email);

		if (user && (await user.validatePassword(password))) {
			return user;
		}

		return null;
	}

	async createToken(user: User) {
		return {
			access_token: this.jwtService.sign({
				sub: user.id,
				email: user.email
			})
		};
	}
}
