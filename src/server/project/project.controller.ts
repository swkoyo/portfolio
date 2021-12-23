import {
	Controller,
	Logger,
	Get,
	NotFoundException,
	Param,
	Post,
	Body,
	UseGuards,
	Delete,
	Query,
	Put
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto, GetProjectDto, UpdateProjectTechDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateProjectDto } from './dto';

@Controller('api/projects')
export class ProjectController {
	logger: Logger = new Logger(ProjectController.name);

	constructor(private readonly projectService: ProjectService) {}

	@Get()
	async findAll() {
		return this.projectService.findAll();
	}

	@Get(':id')
	async findOne(@Param() param: GetProjectDto) {
		const project = await this.projectService.findOneById(param.id);

		if (!project) {
			this.logger.error('findOne no project found %o', {
				id: param.id
			});

			throw new NotFoundException(
				`Project with id ${param.id} not found`
			);
		}

		return project;
	}

	@Post()
	@UseGuards(AuthGuard('jwt'))
	async create(@Body() body: CreateProjectDto) {
		return this.projectService.create(body);
	}

	@Delete()
	@UseGuards(AuthGuard('jwt'))
	async remove(@Query() param: GetProjectDto) {
		return this.projectService.removeById(param.id);
	}

	@Put()
	@UseGuards(AuthGuard('jwt'))
	async update(@Body() body: UpdateProjectDto) {
		return this.projectService.update(body);
	}

	@Put('/technology')
	@UseGuards(AuthGuard('jwt'))
	async addTechnology(@Body() body: UpdateProjectTechDto) {
		return this.projectService.addTech(body);
	}

	@Delete('/technology')
	@UseGuards(AuthGuard('jwt'))
	async removeTechnology(@Body() body: UpdateProjectTechDto) {
		return this.projectService.removeTech(body);
	}
}
