import {
	IsString,
	IsNotEmpty,
	IsArray,
	IsLowercase,
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

	@IsArray()
	@IsInt({ each: true })
	@Min(0, { each: true })
	technologies: number[];
}
