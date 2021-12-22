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
	Query,
	Put
} from '@nestjs/common';
import { TechnologyService } from './technology.service';
import {
	CreateTechnologyDto,
	GetTechnologyDto,
	UpdateTechnologyDto
} from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/technologies')
export class TechnologyController {
	logger: Logger = new Logger(TechnologyController.name);

	constructor(private readonly technologyService: TechnologyService) {}

	@Get()
	async findAll() {
		return this.technologyService.findAll();
	}

	@Get(':id')
	async findOne(@Param() param: GetTechnologyDto) {
		const tech = await this.technologyService.findOneById(param.id);

		if (!tech) {
			this.logger.error('findOne no tech found %o', {
				id: param.id
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
		return this.technologyService.removeById(param.id);
	}

	@Put()
	@UseGuards(AuthGuard('jwt'))
	async update(@Body() body: UpdateTechnologyDto) {
		return this.technologyService.update(body);
	}
}
