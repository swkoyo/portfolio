import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsUrl,
	IsArray,
	ArrayNotEmpty,
	IsDateString
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
	@ArrayNotEmpty()
	@IsString({ each: true })
	@IsNotEmpty({ each: true })
	languages: string[];

	@IsArray()
	@ArrayNotEmpty()
	@IsString({ each: true })
	@IsNotEmpty({ each: true })
	@IsOptional()
	technologies: string[];

	@IsDateString()
	last_deployed: Date;
}
