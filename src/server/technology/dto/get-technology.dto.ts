import { IsLowercase, IsNotEmpty, IsString } from 'class-validator';

export class GetTechnologyDto {
	@IsString()
	@IsNotEmpty()
	@IsLowercase()
	name: string;
}
