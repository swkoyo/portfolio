import { IsLowercase, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetProjectDto {
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;
}
