import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, IsLowercase } from 'class-validator';

export class UpdateUserDto {
	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	tagline: string;

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@Transform(({ value }) => value.trim().toLowerCase())
	profile: string;
}
