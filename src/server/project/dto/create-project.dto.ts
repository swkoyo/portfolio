import {
	IsString,
	IsNotEmpty,
	IsArray,
	IsLowercase,
	IsInt,
	Min,
	IsUrl,
	IsOptional,
	IsObject,
	ValidateNested
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

class ProjectLinks {
	@IsUrl()
	@IsOptional()
	github: string;

	@IsUrl()
	@IsOptional()
	website: string;
}

export class CreateProjectDto {
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;

	@IsString()
	@IsNotEmpty()
	description: string;

	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	tagline: string;

	@IsArray()
	@IsInt({ each: true })
	@Min(0, { each: true })
	technologies: number[];

	@IsObject()
	@IsOptional()
	@ValidateNested()
	@Type(() => ProjectLinks)
	link_urls: ProjectLinks;
}
