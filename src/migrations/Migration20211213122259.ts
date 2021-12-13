import { Migration } from '@mikro-orm/migrations';
import * as bcrypt from 'bcrypt';

export class Migration20211213122259 extends Migration {
	async up(): Promise<void> {
		this.addSql(
			'create table "Users" ("id" serial primary key, "email" varchar(255) not null, "password" varchar(255) not null, "created_at" timestamptz(0) default Now(), "updated_at" timestamptz(0) default Now());'
		);

		this.addSql(
			'create table "Projects" ("id" serial primary key, "name" varchar(255) not null, "description" varchar(255) not null, "repo_url" varchar(255) not null, "web_url" varchar(255) not null, "languages" text[] not null, "technologies" text[] not null, "last_deployed" timestamptz(0) not null, "created_at" timestamptz(0) default Now(), "updated_at" timestamptz(0) default Now());'
		);

		const email = process.env.ADMIN_EMAIL;
		const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

		this.addSql(
			`INSERT INTO "Users" (id, email, password) VALUES (1, '${email}', '${password}');`
		);
	}

	async down(): Promise<void> {
		this.addSql('DROP TABLE "Projectgs"');
		this.addSql('DROP TABLE "Users"');
	}
}
