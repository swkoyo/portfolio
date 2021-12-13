import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Logger } from '@nestjs/common';
import * as path from 'path';

const logger = new Logger('MikroORM');

const config: Options = {
	type: 'postgresql',
	host: process.env.DATABASE_HOST,
	port: parseInt(process.env.DATABASE_PORT) || 5432,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	dbName: process.env.DATABASE_NAME,
	entities: ['dist/**/*.entity.js'],
	entitiesTs: ['src/**/*.entity.ts'],
	debug: true,
	highlighter: new SqlHighlighter(),
	logger: logger.log.bind(logger),
	migrations: {
		tableName: 'mikro_orm_migrations',
		path: path.resolve(__dirname, './migrations'),
		pattern: /^[\w-]+\d+\.ts$/,
		transactional: true,
		disableForeignKeys: true,
		allOrNothing: true,
		dropTables: true,
		safe: true,
		emit: 'ts'
	}
};

export default config;
