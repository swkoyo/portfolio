import { User } from './user.entity';

export type IUserRO = Omit<
	User,
	'id' | 'password' | 'created_at' | 'updated_at'
>;
