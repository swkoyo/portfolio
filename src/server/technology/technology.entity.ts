import {
	Entity,
	PrimaryKey,
	Property,
	ManyToMany,
	Collection
} from '@mikro-orm/core';
import { Project } from '../project/project.entity';

@Entity({
	tableName: 'Technologies'
})
export class Technology {
	@PrimaryKey()
	id!: number;

	@Property({ unique: true })
	name!: string;

	@Property()
	logo_url!: string;

	@Property({ hidden: true })
	created_at: Date = new Date();

	@Property({ hidden: true })
	updated_at: Date = new Date();

	@ManyToMany(() => Project)
	projects = new Collection<Project>(this);

	constructor(name: string, logo_url: string) {
		this.name = name;
		this.logo_url = logo_url;
	}
}
