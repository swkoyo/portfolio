import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsUrl,
	IsArray,
	IsLowercase,
	IsDate
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
	@IsString({ each: true })
	@IsNotEmpty({ each: true })
	@Transform(({ value }) => value.map((v) => v.trim().toLowerCase()))
	@IsLowercase({ each: true })
	technologies: string[];

	@IsDate()
	last_deployed = new Date();
}
