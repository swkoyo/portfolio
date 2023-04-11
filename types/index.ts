import { APP, TECH } from '../constants';

export interface Project {
	title: string;
	featured: boolean;
	description: string;
	tech_stack: TECH[];
	links: {
		type: APP | TECH;
		url: string;
	}[];
	image: string;
}
