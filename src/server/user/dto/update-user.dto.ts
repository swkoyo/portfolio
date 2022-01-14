import { Transform, Type } from 'class-transformer';
import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsLowercase,
	IsUrl,
	IsObject,
	ValidateNested
} from 'class-validator';

class UserLinks {
	@IsUrl()
	@IsOptional()
	github: string;

	@IsUrl()
	@IsOptional()
	linkedin: string;

	@IsUrl()
	@IsOptional()
	resume: string;
}

export class UpdateUserDto {
	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	tagline: string;

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@Transform(({ value }) => value.trim().toLowerCase())
	description: string;

	@IsUrl()
	@IsOptional()
	avatar_url: string;

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	about: string;

	@IsObject()
	@IsOptional()
	@ValidateNested()
	@Type(() => UserLinks)
	link_urls: UserLinks;
}
