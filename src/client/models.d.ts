export interface User {
	email: string;
	first_name: string;
	last_name: string;
	tagline: string;
	profile: string;
	full_name: string;
}

export interface Project {
	name: string;
	description: string;
	repo_url: string;
	web_url: string;
	last_deployed: Date;
	technologies?: Technology[];
}

export interface Technology {
	name: string;
	logo: string;
	projects?: Project[];
}
