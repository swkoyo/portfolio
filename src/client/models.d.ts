interface BaseModel {
	id: number;
	created_at: Date;
	updated_at: Date;
}

export interface User extends BaseModel {
	email: string;
	password: string;
	first_name: string;
	last_name: string;
	tagline: string;
	profile: string;
	full_name: string;
}

export interface Project extends BaseModel {
	name: string;
	description: string;
	repo_url: string;
	web_url: string;
	last_deployed: Date;
	technologies: Technology[];
}

export interface Technology extends BaseModel {
	name: string;
	logo: string;
	projects: Project[];
}
