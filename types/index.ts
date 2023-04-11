import { APP, TECH } from '../constants';

export interface Project {
	title: string;
	featured: boolean;
	description: string;
	links: {
		type: APP | TECH;
		url: string;
	}[];
	image: string;
	tech: {
		full: TECH[];
		core: TECH[];
		languages: TECH[];
		frameworks: TECH[];
		libraries: TECH[];
		database: TECH[];
		deployment: TECH[];
		environment: TECH[];
	};
}
