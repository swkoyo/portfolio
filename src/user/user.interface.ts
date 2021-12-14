import { User } from './user.entity';

export interface IUserRO extends Partial<User> {
	password?: string;
}
