import { Transform } from 'class-transformer';
import { IsLowercase, IsNotEmpty, IsString } from 'class-validator';

export class GetTechnologyDto {
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim().toLowerCase())
	@IsLowercase()
	name: string;
}
