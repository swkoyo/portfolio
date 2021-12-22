import { Technology } from './technology.entity';

export type ITechnologyRO = Omit<Technology, 'created_at' | 'updated_at'>;

export type ITechnologiesRO = ITechnologyRO[];
