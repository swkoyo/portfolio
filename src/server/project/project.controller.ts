import {
	Controller,
	Logger,
	Get,
	NotFoundException,
	Param,
	Post,
	Body,
	UseGuards
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto, GetProjectDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/projects')
export class ProjectController {
	logger: Logger = new Logger(ProjectController.name);

	constructor(private readonly projectService: ProjectService) {}

	@Get()
	async findAll() {
		return this.projectService.findAll();
	}

	@Get(':name')
	async findOne(@Param() param: GetProjectDto) {
		const project = await this.projectService.findOneByName(param.name);

		if (!project) {
			this.logger.error('findOne no project found %o', {
				name: param.name
			});

			throw new NotFoundException();
		}

		return project;
	}

	@Post()
	@UseGuards(AuthGuard('jwt'))
	async create(@Body() body: CreateProjectDto) {
		return this.projectService.create(body);
	}
}
