import {
	Controller,
	Logger,
	Get,
	NotFoundException,
	Param,
	Post,
	Body,
	Delete
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { IProjectRO, IProjectsRO } from './project.interface';
import { CreateProjectDto } from './dto';

@Controller('projects')
export class ProjectController {
	logger: Logger = new Logger(ProjectController.name);

	constructor(private readonly projectService: ProjectService) {}

	@Get()
	async findAll(): Promise<IProjectsRO> {
		return this.projectService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: number): Promise<IProjectRO> {
		return await this.projectService.findOne(id);
	}

	@Post()
	async postProjects(@Body() body: CreateProjectDto): Promise<IProjectRO> {
		return this.projectService.create(body);
	}
}
