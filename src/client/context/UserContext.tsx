import { createContext } from 'react';

export interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	tagline: string;
	profile: string;
}

type userContextType = {
	userData?: User;
	handleUserData: (user: User) => void;
};

const userContextDefaultValues: userContextType = {
	userData: null,
	handleUserData: () => {}
};

const UserContext = createContext<userContextType>(userContextDefaultValues);

export default UserContext;
