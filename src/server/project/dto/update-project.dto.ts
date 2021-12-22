import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsUrl,
	IsLowercase,
	IsDate,
	IsInt,
	Min
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

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

	@IsUrl()
	@IsOptional()
	repo_url: string;

	@IsUrl()
	@IsOptional()
	web_url: string;

	@IsDate()
	@IsOptional()
	last_deployed = new Date();
}

export class UpdateProjectDto {
	@Type(() => Number)
	@IsInt()
	@Min(1)
	id: number;

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
