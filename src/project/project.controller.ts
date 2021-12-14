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
import { IProjectRO, IProjectsRO } from './project.interface';
import { CreateProjectDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('projects')
export class ProjectController {
	logger: Logger = new Logger(ProjectController.name);

	constructor(private readonly projectService: ProjectService) {}

	@Get()
	@UseGuards(AuthGuard('jwt'))
	async findAll(): Promise<IProjectsRO> {
		return this.projectService.findAll();
	}

	@Get(':id')
	@UseGuards(AuthGuard('jwt'))
	async findOne(@Param('id') id: number) {
		const user = await this.projectService.findOne(id);
		if (!user) {
			throw new NotFoundException();
		}
		return user;
	}

	@Post()
	@UseGuards(AuthGuard('jwt'))
	async postProjects(@Body() body: CreateProjectDto) {
		return this.projectService.create(body);
	}
}
