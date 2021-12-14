import { Project } from './project.entity';

export interface IProjectsRO {
	count: number;
	projects: Project[];
}

export type IProjectRO = Project;
