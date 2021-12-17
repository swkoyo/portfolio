import { IsString, IsNotEmpty, IsUrl, IsLowercase } from 'class-validator';

export class CreateTechnologyDto {
	@IsString()
	@IsNotEmpty()
	@IsLowercase()
	name: string;

	@IsUrl()
	logo: string;
}
