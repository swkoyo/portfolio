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

	@Property({ hidden: true })
	created_at: Date = new Date();

	@Property({ hidden: true })
	updated_at: Date = new Date();

	@ManyToMany(() => Technology)
	technologies = new Collection<Technology>(this);

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}
