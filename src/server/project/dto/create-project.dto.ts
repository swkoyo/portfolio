import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsUrl,
	IsDateString,
	IsArray
} from 'class-validator';

export class CreateProjectDto {
	@IsString()
	@IsNotEmpty()
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
	technologies: string[];

	@IsDateString()
	last_deployed: Date;
}
