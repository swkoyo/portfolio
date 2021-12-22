export interface User {
	email: string;
	first_name: string;
	last_name: string;
	tagline: string;
	description: string;
	full_name: string;
	avatar_url: string;
}

export interface Project {
	id: number;
	name: string;
	description: string;
	repo_url: string;
	web_url?: string;
	technologies?: Technology[];
}

export interface Technology {
	id: number;
	name: string;
	logo_url: string;
	projects?: Project[];
}
