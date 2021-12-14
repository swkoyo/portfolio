import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity({
	tableName: 'Users'
})
export class User {
	@PrimaryKey()
	id!: number;

	@Property()
	@IsEmail()
	@IsNotEmpty()
	email!: string;

	@Property()
	@IsString()
	@IsNotEmpty()
	password!: string;

	@Property()
	@IsString()
	@IsNotEmpty()
	first_name!: string;

	@Property()
	@IsString()
	@IsNotEmpty()
	last_name!: string;

	@Property()
	@IsString()
	@IsNotEmpty()
	tagline!: string;

	@Property()
	@IsString()
	@IsNotEmpty()
	profile!: string;

	@Property()
	created_at: Date = new Date();

	@Property()
	updated_at: Date = new Date();

	constructor(
		email: string,
		password: string,
		first_name: string,
		last_name: string,
		tagline: string,
		profile: string
	) {
		this.email = email;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.tagline = tagline;
		this.profile = profile;
	}

	async validatePassword(password): Promise<boolean> {
		return bcrypt.compare(password, this.password);
	}
}
