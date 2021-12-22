import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsUrl, IsLowercase } from 'class-validator';

export class CreateTechnologyDto {
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;

	@IsUrl()
	logo: string;
}
