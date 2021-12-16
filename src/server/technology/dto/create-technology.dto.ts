import { IsString, IsNotEmpty, IsUrl, IsLowercase } from 'class-validator';

export class CreateTechnologyDto {
	@IsString()
	@IsNotEmpty()
	@IsLowercase()
	name: string;

	@IsString()
	@IsNotEmpty()
	@IsUrl()
	logo: string;
}
