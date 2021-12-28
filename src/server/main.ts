import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { bufferLogs: true });
	const configService = app.get<ConfigService>(ConfigService);
	app.useLogger(app.get<Logger>(Logger));
	app.useGlobalPipes(new ValidationPipe({ transform: true }));
	app.enableCors();
	await app.listen(configService.get<number>('port'));
}
bootstrap();
