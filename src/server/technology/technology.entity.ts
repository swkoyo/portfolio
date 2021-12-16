import {
	Entity,
	PrimaryKey,
	Property,
	ManyToMany,
	Collection
} from '@mikro-orm/core';
import { IsNotEmpty, IsString, IsLowercase, IsUrl } from 'class-validator';
import { Project } from '../project/project.entity';

@Entity({
	tableName: 'Technologies'
})
export class Technology {
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
	@IsUrl()
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
