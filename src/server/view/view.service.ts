import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import createServer from 'next';
import { NextServer } from 'next/dist/server/next';

@Injectable()
export class ViewService implements OnModuleInit {
	private server: NextServer;

	logger: Logger = new Logger(ViewService.name);

	constructor(private configService: ConfigService) {}

	async onModuleInit() {
		try {
			this.server = createServer({
				dev:
					this.configService.get<string>('NODE_ENV') !== 'production',
				dir: './src/client'
			});

			await this.server.prepare();
		} catch (err) {
			this.logger.error(err);
		}
	}

	getNextServer(): NextServer {
		return this.server;
	}
}