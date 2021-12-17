import { Technology } from './technology.entity';

export type ITechnologyRO = Omit<
	Technology,
	'id' | 'created_at' | 'updated_at'
>;

export type ITechnologiesRO = ITechnologyRO[];
