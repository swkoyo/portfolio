import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsUrl,
	IsArray,
	IsLowercase,
	IsDate,
	IsInt,
	Min
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateProjectDto {
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;

	@IsString()
	@IsNotEmpty()
	description: string;

	@IsUrl()
	repo_url: string;

	@IsUrl()
	@IsOptional()
	web_url: string;

	@IsArray()
	@IsInt({ each: true })
	@Min(0, { each: true })
	technologies: number[];

	@IsDate()
	last_deployed = new Date();
}
