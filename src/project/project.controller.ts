import {
	Controller,
	Logger,
	Get,
	NotFoundException,
	Param,
	Post,
	Body,
	Delete,
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
	async findOne(@Param('id') id: number): Promise<IProjectRO> {
		return this.projectService.findOne(id);
	}

	@Post()
	@UseGuards(AuthGuard('jwt'))
	async postProjects(@Body() body: CreateProjectDto): Promise<IProjectRO> {
		return this.projectService.create(body);
	}
}
