import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '../models';
import cookieCutter from 'cookie-cutter';

export type UpdateUser = Partial<
	Pick<User, 'avatar_url' | 'tagline' | 'description' | 'link_urls'>
>;

type userContextType = {
	userData?: User;
	updateUser: (user: UpdateUser) => void;
};

const userContextDefaultValues: userContextType = {
	userData: null,
	updateUser: () => {}
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

	const updateUser = async (data: UpdateUser) => {
		const res = await fetch(`${process.env.API_URL}/user`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify(data)
		});

		const user = await res.json();

		if (!res.ok) {
			throw new Error(user.message);
		}

		setUserData(user);
	};

	const value = {
		userData,
		updateUser
	};

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
