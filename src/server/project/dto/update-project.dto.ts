import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsLowercase,
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

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	tagline: string;
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
