import { createContext, ReactNode, useContext, useState } from 'react';

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

export const useUser = () => {
	return useContext(UserContext);
};

type Props = {
	children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
	const [userData, setUserData] = useState<User>(null);

	const handleUserData = (updatedUser: User) => {
		setUserData(updatedUser);
	};

	const value = {
		userData,
		handleUserData
	};

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
