import { Technology } from './technology.entity';

export interface ITechnologiesRO {
	count: number;
	technologies: Technology[];
}

export type ITechnologyRO = Technology;
