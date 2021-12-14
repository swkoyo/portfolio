import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import configuration from './config';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from 'nestjs-pino';
import { nanoid } from 'nanoid';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration]
		}),
		LoggerModule.forRoot({
			pinoHttp: {
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
		}),
		MikroOrmModule.forRoot(),
		ProjectModule,
		UserModule,
		AuthModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
