import { IsLowercase, IsNotEmpty, IsString } from 'class-validator';

export class GetProjectDto {
	@IsString()
	@IsNotEmpty()
	@IsLowercase()
	name: string;
}
