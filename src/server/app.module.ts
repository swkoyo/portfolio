import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { ViewModule } from './view/view.module';
import { TechnologyModule } from './technology/technology.module';

import configuration from './config';
import { nanoid } from 'nanoid';
import { UserController } from './user/user.controller';
import { ProjectController } from './project/project.controller';
import { AuthController } from './auth/auth.controller';
import { TechnologyController } from './technology/technology.controller';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration]
		}),
		LoggerModule.forRoot({
			forRoutes: [
				UserController,
				ProjectController,
				AuthController,
				TechnologyController
			],
			pinoHttp:
				process.env.NODE_ENV !== 'production'
					? {
							level: 'trace',
							genReqId: () => nanoid(),
							transport: {
								target: 'pino-pretty',
								options: {
									colorize: true,
									levelFirst: true
								}
							},
							serializers: {
								req(req) {
									return {
										id: req.id,
										method: req.method,
										url: req.url,
										host: req.headers.host,
										remoteAddress: req.remoteAddress
									};
								},
								res(res) {
									return {
										statusCode: res.statusCode
									};
								},
								err(err) {
									return {
										type: err.type,
										message: err.message,
										stack: err.stack,
										code: err.code
									};
								}
							}
					  }
					: {}
		}),
		MikroOrmModule.forRoot(),
		ProjectModule,
		UserModule,
		AuthModule,
		ViewModule,
		TechnologyModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
