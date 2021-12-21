import { Transform } from 'class-transformer';
import {
	IsString,
	IsNotEmpty,
	IsUrl,
	IsLowercase,
	IsOptional
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
	logo: string;
}

export class UpdateTechnologyDto {
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;

	data: UpdateTechnologyData;
}
