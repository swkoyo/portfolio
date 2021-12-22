import { Project } from './project.entity';

export type IProjectRO = Omit<Project, 'created_at' | 'updated_at'>;

export type IProjectsRO = IProjectRO[];
