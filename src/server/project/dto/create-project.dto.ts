import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsUrl,
	IsArray,
	IsLowercase,
	IsDate
} from 'class-validator';

export class CreateProjectDto {
	@IsString()
	@IsNotEmpty()
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
	@IsLowercase({ each: true })
	technologies: string[];

	@IsDate()
	last_deployed = new Date();
}
