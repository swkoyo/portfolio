import {
	Controller,
	Logger,
	Get,
	Post,
	Body,
	UseGuards,
	Param,
	NotFoundException,
	Delete,
	Query
} from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { CreateTechnologyDto, GetTechnologyDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/technologies')
export class TechnologyController {
	logger: Logger = new Logger(TechnologyController.name);

	constructor(private readonly technologyService: TechnologyService) {}

	@Get()
	async findAll() {
		return this.technologyService.findAll();
	}

	@Get(':name')
	async findOne(@Param() param: GetTechnologyDto) {
		const tech = await this.technologyService.findOneByName(param.name);

		if (!tech) {
			this.logger.error('findOne no tech found %o', {
				name: param.name
			});

			throw new NotFoundException();
		}

		return tech;
	}

	@Post()
	@UseGuards(AuthGuard('jwt'))
	async postTechnologies(@Body() body: CreateTechnologyDto) {
		return this.technologyService.create(body);
	}

	@Delete()
	@UseGuards(AuthGuard('jwt'))
	async remove(@Query() param: GetTechnologyDto) {
		return this.technologyService.removeByName(param.name);
	}
}
