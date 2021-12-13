import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import configuration from './config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration]
		}),
		MikroOrmModule.forRoot(),
		ProjectModule,
		UserModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
