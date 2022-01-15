import { Migration } from '@mikro-orm/migrations';
import * as bcrypt from 'bcryptjs';

export class Migration20211213122259 extends Migration {
	async up(): Promise<void> {
		await this.addSql(`
			CREATE TABLE "Users" (
				id SERIAL PRIMARY KEY,
				email VARCHAR(255) NOT NULL,
				password VARCHAR(255) NOT NULL,
				first_name VARCHAR(255) NOT NULL,
				last_name VARCHAR(255) NOT NULL,
				tagline VARCHAR(255) NOT NULL,
				description TEXT NOT NULL,
				about TEXT NOT NULL,
				avatar_url VARCHAR(255) NOT NULL,
				link_urls JSONB NOT NULL DEFAULT '{}'::JSONB,
				created_at TIMESTAMP DEFAULT NOW(),
				updated_at TIMESTAMP DEFAULT NOW()
			);
		`);

		await this.addSql(`
			CREATE TABLE "Projects" (
				id SERIAL PRIMARY KEY,
				name VARCHAR(255) NOT NULL UNIQUE,
				description TEXT NOT NULL,
				image_url VARCHAR(255),
				link_urls JSONB NOT NULL DEFAULT '{}'::JSONB,
				created_at TIMESTAMP DEFAULT NOW(),
				updated_at TIMESTAMP DEFAULT NOW()
			);
		`);

		await this.addSql(`
			CREATE TABLE "Technologies" (
				id SERIAL PRIMARY KEY,
				name VARCHAR(255) NOT NULL UNIQUE,
				logo_url VARCHAR(255) NOT NULL,
				created_at TIMESTAMP DEFAULT NOW(),
				updated_at TIMESTAMP DEFAULT NOW()
			);
		`);

		this.addSql(`
			CREATE TABLE "projects_technologies" (
				project_id INT4 NOT NULL,
				technology_id INT4 NOT NULL,
				CONSTRAINT projects_technologies_pkey
					PRIMARY KEY (project_id, technology_id),
				CONSTRAINT projects_technologies_project_id_foreign
					FOREIGN KEY (project_id) REFERENCES "Projects" (id)
					ON UPDATE CASCADE
					ON DELETE CASCADE,
				CONSTRAINT projects_technologies_technology_id_foreign
					FOREIGN KEY (technology_id) REFERENCES "Technologies" (id)
					ON UPDATE CASCADE
					ON DELETE CASCADE
			);
		`);

		this.addSql(`
			CREATE TABLE "technologies_projects" (
				technology_id INT4 NOT NULL,
				project_id INT4 NOT NULL,
				CONSTRAINT technologies_projects_pkey
					PRIMARY KEY (technology_id, project_id),
				CONSTRAINT technologies_projects_technology_id_foreign
					FOREIGN KEY (technology_id) REFERENCES "Technologies" (id)
					ON UPDATE CASCADE
					ON DELETE CASCADE,
				CONSTRAINT technologies_projects_project_id_foreign
					FOREIGN KEY (project_id) REFERENCES "Projects" (id)
					ON UPDATE CASCADE
					ON DELETE CASCADE
			);
		`);

		const email = process.env.ADMIN_EMAIL;
		const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
		const first_name = process.env.ADMIN_FIRST_NAME;
		const last_name = process.env.ADMIN_LAST_NAME;
		const tagline = process.env.ADMIN_TAGLINE || 'A Full-Stack Developer';
		const description =
			process.env.ADMIN_DESCRIPTION || 'I am a developer.';
		const avatar_url = process.env.ADMIN_AVATAR_URL;
		const link_urls: Record<string, string> = {};
		const about = process.env.ADMIN_ABOUT || 'About me';

		if (process.env.ADMIN_GITHUB_URL)
			link_urls.github = process.env.ADMIN_GITHUB_URL;
		if (process.env.ADMIN_LINKEDIN_URL)
			link_urls.linkedin = process.env.ADMIN_LINKEDIN_URL;
		if (process.env.ADMIN_RESUME_URL)
			link_urls.resume = process.env.ADMIN_RESUME_URL;

		await this.addSql(`
			INSERT INTO "Users" (
				id,
				email,
				password,
				first_name,
				last_name,
				tagline,
				description,
				about,
				avatar_url,
				link_urls
			) VALUES (
				1,
				'${email}',
				'${password}',
				'${first_name}',
				'${last_name}',
				'${tagline}',
				'${description}',
				'${about}',
				'${avatar_url}',
				'${JSON.stringify(link_urls)}'::JSONB
			);
		`);
	}

	async down(): Promise<void> {
		await this.addSql('DROP TABLE "projects_technologies";');
		await this.addSql('DROP TABLE "technologies_projects";');
		await this.addSql('DROP TABLE "Projects";');
		await this.addSql('DROP TABLE "Users";');
		await this.addSql('DROP TABLE "Technologies";');
	}
}
