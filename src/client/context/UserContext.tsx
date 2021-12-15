import { createContext, ReactNode, useContext, useState } from 'react';

interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	tagline: string;
	profile: string;
}

type userContextType = {
	user?: User;
	update: (user: User) => void;
};

const userContextDefaultValues: userContextType = {
	user: null,
	update: () => {}
};

const UserContext = createContext<userContextType>(userContextDefaultValues);

export const useUser = () => {
	return useContext(UserContext);
};

type Props = {
	children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
	const [user, setUser] = useState<User>(null);

	const update = (updatedUser: User) => {
		setUser(updatedUser);
	};

	const value = {
		user,
		update
	};

	return (
		<>
			<UserContext.Provider value={value}>
				{children}
			</UserContext.Provider>
		</>
	);
};
