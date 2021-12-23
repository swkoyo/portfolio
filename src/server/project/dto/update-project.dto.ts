import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsLowercase,
	IsInt,
	Min,
	IsUrl,
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

class UpdateProjectBody {
	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	description: string;

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	tagline: string;

	@IsObject()
	@IsOptional()
	@ValidateNested()
	@Type(() => ProjectLinks)
	link_urls: ProjectLinks;
}

export class UpdateProjectDto {
	@Type(() => Number)
	@IsInt()
	@Min(1)
	id: number;

	@IsObject()
	@ValidateNested()
	@Type(() => UpdateProjectBody)
	data: UpdateProjectBody;
}

export class UpdateProjectTechDto {
	@Type(() => Number)
	@IsInt()
	@Min(1)
	id: number;

	@Type(() => Number)
	@IsInt()
	@Min(1)
	technology_id: number;
}
