import { Module } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { TechnologyController } from './technology.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Technology } from './technology.entity';

@Module({
	imports: [MikroOrmModule.forFeature({ entities: [Technology] })],
	providers: [TechnologyService],
	controllers: [TechnologyController],
	exports: [TechnologyService]
})
export class TechnologyModule {}
