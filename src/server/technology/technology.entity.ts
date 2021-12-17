import {
	Entity,
	PrimaryKey,
	Property,
	ManyToMany,
	Collection,
	wrap
} from '@mikro-orm/core';
import { pick } from 'lodash';
import { Project } from '../project/project.entity';

@Entity({
	tableName: 'Technologies'
})
export class Technology {
	@PrimaryKey({ hidden: true })
	id!: number;

	@Property({ unique: true })
	name!: string;

	@Property()
	logo!: string;

	@Property({ hidden: true })
	created_at: Date = new Date();

	@Property({ hidden: true })
	updated_at: Date = new Date();

	@ManyToMany(() => Project)
	projects = new Collection<Project>(this);

	constructor(name: string, logo: string) {
		this.name = name;
		this.logo = logo;
	}
}
