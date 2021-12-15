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
	@UseGuards(AuthGuard('jwt'))
	async findAll() {
		return this.projectService.findAll();
	}

	@Get(':id')
	@UseGuards(AuthGuard('jwt'))
	async findOne(@Param() param: GetProjectDto) {
		const project = await this.projectService.findOne(param.id);

		if (!project) {
			this.logger.error('findOne no project found %o', { id: param.id });

			throw new NotFoundException();
		}

		return project;
	}

	@Post()
	@UseGuards(AuthGuard('jwt'))
	async postProjects(@Body() body: CreateProjectDto) {
		return this.projectService.create(body);
	}
}
