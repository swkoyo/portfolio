import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Project } from './project.entity';
import { TechnologyModule } from '../technology/technology.module';
import { Technology } from '../technology/technology.entity';

@Module({
	imports: [
		MikroOrmModule.forFeature({ entities: [Project, Technology] }),
		TechnologyModule
	],
	providers: [ProjectService],
	controllers: [ProjectController],
	exports: []
})
export class ProjectModule {}
