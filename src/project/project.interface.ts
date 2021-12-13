import { Project } from './project.entity';

export interface IProjectsRO {
	count: number;
	projects: Project[];
}

export interface IProjectRO {
	project: Project;
}
