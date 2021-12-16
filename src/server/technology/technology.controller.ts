import { Controller, Logger, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { CreateTechnologyDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/technologies')
export class TechnologyController {
	logger: Logger = new Logger(TechnologyController.name);

	constructor(private readonly technologyService: TechnologyService) {}

	@Get()
	async findAll() {
		return this.technologyService.findAll();
	}

	@Post()
	@UseGuards(AuthGuard('jwt'))
	async postTechnologies(@Body() body: CreateTechnologyDto) {
		return this.technologyService.create(body);
	}
}
