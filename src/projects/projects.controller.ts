import {
	Controller,
	Logger,
	Get,
	NotFoundException,
	Param,
	Post,
	Body,
	Delete,
	ForbiddenException
} from '@nestjs/common';
import { ProjectsBodyDto } from './projects-body.dto';
import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {
	logger: Logger = new Logger(ProjectsController.name);

	constructor(private readonly projectsService: ProjectsService) {}

	@Get('projects')
	async getProjects() {
		try {
			return 'projects';
		} catch (err) {
			this.logger.error(err?.message ?? '');
			throw err;
		}
	}

	@Get('projects/:id')
	async getProjectsId(@Param('id') id: number) {
		try {
			const project = await this.projectsService.findById(id);
			if (!project) throw new NotFoundException('Not found');
			return project;
		} catch (err) {
			this.logger.error(err?.message ?? '');
			throw err;
		}
	}

	@Post('projects')
	async postProjects(@Body() body: ProjectsBodyDto) {
		try {
			return await this.projectsService.create(body.name);
		} catch (err) {
			this.logger.error(err?.message ?? '');
			throw err;
		}
	}

	@Delete('projects/:id')
	async deleteProjectsId(@Param('id') id: number) {
		try {
			throw new ForbiddenException('Nope');
		} catch (err) {
			this.logger.error(err?.message ?? '');
			throw err;
		}
	}
}
