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
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;

	data: UpdateProjectBody;
}

export class UpdateProjectTechDto {
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;

	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	technology: string;
}
