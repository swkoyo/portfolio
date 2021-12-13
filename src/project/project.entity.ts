import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import {
	IsNotEmpty,
	IsString,
	IsOptional,
	IsDateString,
	IsArray,
	ArrayNotEmpty
} from 'class-validator';

@Entity()
export class Project {
	@PrimaryKey()
	id!: number;

	@Property()
	@IsString()
	@IsNotEmpty()
	name!: string;

	@Property()
	@IsString()
	@IsNotEmpty()
	description!: string;

	@Property()
	@IsString()
	@IsNotEmpty()
	repo_url!: string;

	@Property()
	@IsString()
	@IsOptional()
	web_url?: string = '';

	@Property()
	@IsArray()
	@ArrayNotEmpty()
	@IsString({ each: true })
	@IsNotEmpty({ each: true })
	languages!: string[];

	@Property()
	@IsArray()
	@ArrayNotEmpty()
	@IsString({ each: true })
	@IsNotEmpty({ each: true })
	@IsOptional()
	technologies?: string[] = [];

	@Property()
	@IsDateString()
	last_deployed!: Date;

	@Property()
	created_at: Date = new Date();

	@Property()
	updated_at: Date = new Date();

	constructor(
		name: string,
		description: string,
		repo_url: string,
		web_url: string,
		languages: string[],
		technologies: string[],
		last_deployed: Date
	) {
		this.name = name;
		this.description = description;
		this.repo_url = repo_url;
		this.web_url = web_url;
		this.languages = languages;
		this.technologies = technologies;
		this.last_deployed = last_deployed;
	}
}
