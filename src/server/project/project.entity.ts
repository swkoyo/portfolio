import {
	Entity,
	PrimaryKey,
	Property,
	ManyToMany,
	Collection
} from '@mikro-orm/core';
import { Technology } from '../technology/technology.entity';

@Entity({
	tableName: 'Projects'
})
export class Project {
	@PrimaryKey()
	id!: number;

	@Property({ unique: true })
	name!: string;

	@Property()
	description!: string;

	@Property()
	repo_url!: string;

	@Property()
	web_url?: string = '';

	@Property()
	last_deployed = new Date();

	@Property({ hidden: true })
	created_at: Date = new Date();

	@Property({ hidden: true })
	updated_at: Date = new Date();

	@ManyToMany(() => Technology)
	technologies = new Collection<Technology>(this);

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
}
