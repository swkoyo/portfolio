import { BeforeCreate, Entity, PrimaryKey, Property } from '@mikro-orm/core';
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
	created_at: Date = new Date();

	@Property()
	updated_at: Date = new Date();

	constructor(email: string, password: string) {
		this.email = email;
		this.password = password;
	}

	async validatePassword(password) {
		return bcrypt.compare(password, this.password);
	}
}
