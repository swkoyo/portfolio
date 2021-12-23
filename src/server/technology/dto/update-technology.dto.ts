import { Transform, Type } from 'class-transformer';
import {
	IsString,
	IsNotEmpty,
	IsUrl,
	IsLowercase,
	IsOptional,
	IsInt,
	Min,
	IsObject,
	ValidateNested
} from 'class-validator';

class UpdateTechnologyData {
	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;

	@IsUrl()
	@IsOptional()
	logo_url: string;
}

export class UpdateTechnologyDto {
	@Type(() => Number)
	@IsInt()
	@Min(1)
	id: number;

	@IsObject()
	@ValidateNested()
	@Type(() => UpdateTechnologyData)
	data: UpdateTechnologyData;
}
