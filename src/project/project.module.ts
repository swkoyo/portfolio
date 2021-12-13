import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Project } from './project.entity';

@Module({
	imports: [MikroOrmModule.forFeature({ entities: [Project] })],
	providers: [ProjectService],
	controllers: [ProjectController],
	exports: []
})
export class ProjectModule {}
