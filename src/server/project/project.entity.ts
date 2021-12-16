import {
	Entity,
	PrimaryKey,
	Property,
	ManyToMany,
	Collection,
	wrap
} from '@mikro-orm/core';
import {
	IsNotEmpty,
	IsString,
	IsOptional,
	IsDateString,
	IsLowercase
} from 'class-validator';
import { Technology } from '../technology/technology.entity';

@Entity({
	tableName: 'Projects'
})
export class Project {
	@PrimaryKey()
	id!: number;

	@Property()
	@IsString()
	@IsNotEmpty()
	@IsLowercase()
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
	@IsDateString()
	last_deployed!: Date;

	@Property({ hidden: true })
	created_at: Date = new Date();

	@Property({ hidden: true })
	updated_at: Date = new Date();

	@ManyToMany(() => Technology)
	technologies: Collection<Technology> = new Collection<Technology>(this);

	constructor(
		name: string,
		description: string,
		repo_url: string,
		web_url: string,
		last_deployed: Date
	) {
		this.name = name;
		this.description = description;
		this.repo_url = repo_url;
		this.web_url = web_url;
		this.last_deployed = last_deployed;
	}

	toJSON() {
		const technologies = [];
		for (const tech of this.technologies) {
			technologies.push(wrap(tech).toObject());
		}
		const o = wrap(this).toObject();
		o.technologies = technologies;
		return o;
	}
}
