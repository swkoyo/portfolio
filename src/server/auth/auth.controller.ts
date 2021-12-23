import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	@UseGuards(AuthGuard('local'))
	async login(@Request() req) {
		return this.authService.createToken(req.user);
	}

	@Get('check-token')
	@UseGuards(AuthGuard('jwt'))
	async checkToken(@Request() req) {
		return req.user;
	}
}
