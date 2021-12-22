import {
	Entity,
	PrimaryKey,
	Property,
	ManyToMany,
	Collection,
	JsonType
} from '@mikro-orm/core';
import { Technology } from '../technology/technology.entity';

export interface ProjectLinks {
	github?: string;
	website?: string;
}

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
	tagline!: string;

	@Property({ type: JsonType })
	link_urls: ProjectLinks = {};

	@Property({ hidden: true })
	created_at: Date = new Date();

	@Property({ hidden: true })
	updated_at: Date = new Date();

	@ManyToMany(() => Technology)
	technologies = new Collection<Technology>(this);

	constructor(
		name: string,
		description: string,
		tagline: string,
		link_urls?: ProjectLinks
	) {
		this.name = name;
		this.description = description;
		this.tagline = tagline;
		this.link_urls = link_urls;
	}
}
