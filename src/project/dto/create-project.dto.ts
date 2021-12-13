export class CreateProjectDto {
	readonly name!: string;
	readonly description!: string;
	readonly repo_url!: string;
	readonly web_url?: string;
	readonly languages!: string[];
	readonly technologies?: string[];
	readonly last_deployed!: Date;
}
