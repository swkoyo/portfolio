import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '../models';

type userContextType = {
	userData?: User;
	handleUserData: (user: User) => void;
};

const userContextDefaultValues: userContextType = {
	userData: null,
	handleUserData: () => {}
};

const UserContext = createContext<userContextType>(userContextDefaultValues);

export const useUserContext = () => {
	return useContext(UserContext);
};

type Props = {
	children: ReactNode;
	user: User;
};

export const UserProvider = ({ children, user }: Props) => {
	const [userData, setUserData] = useState<User>(user);

	const handleUserData = (user: User) => {
		setUserData(user);
	};

	const value = {
		userData,
		handleUserData
	};

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
