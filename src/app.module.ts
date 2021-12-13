import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		MikroOrmModule.forRoot({
			entities: ['./dist/entities'],
			entitiesTs: ['./src/entities'],
			dbName: 'portfolio.sqlite3',
			type: 'sqlite'
		})
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
