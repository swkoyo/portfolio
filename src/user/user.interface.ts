import { User } from './user.entity';

export interface IUserRO {
	user: User;
	validatePassword: (password: string) => Promise<boolean>;
}
