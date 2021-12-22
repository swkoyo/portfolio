export interface User {
	email: string;
	first_name: string;
	last_name: string;
	tagline: string;
	description: string;
	full_name: string;
	avatar_url: string;
	link_urls: UserLinks;
}

export interface Project {
	id: number;
	name: string;
	description: string;
	tagline: string;
	technologies?: Technology[];
	link_urls: ProjectLinks;
}

export interface Technology {
	id: number;
	name: string;
	logo_url: string;
	projects?: Project[];
}

interface UserLinks {
	github?: string;
	linkedin?: string;
	resume?: string;
}

interface ProjectLinks {
	github?: string;
	website?: string;
}
