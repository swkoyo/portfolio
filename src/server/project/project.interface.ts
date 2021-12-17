import { Project } from './project.entity';

export type IProjectRO = Omit<Project, 'id' | 'created_at' | 'updated_at'>;

export type IProjectsRO = IProjectRO[];
