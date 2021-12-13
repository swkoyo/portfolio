import { IsDefined, IsNotEmpty } from 'class-validator';

export class ProjectsBodyDto {
	@IsDefined()
	@IsNotEmpty()
	name!: string;
}
