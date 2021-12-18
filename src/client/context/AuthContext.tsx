import { createContext, ReactNode, useContext, useState } from 'react';
import cookieCutter from 'cookie-cutter';

type authContextType = {
	auth: boolean;
	login: (data: string) => void;
	logout: () => void;
};

const authContextDefaultValues: authContextType = {
	auth: null,
	login: () => {},
	logout: () => {}
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export const useAuthContext = () => {
	return useContext(AuthContext);
};

type Props = {
	children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
	const [auth, setAuth] = useState<boolean>(null);

	const login = (token: string) => {
		cookieCutter.set('token', token);
		setAuth(true);
	};

	const logout = () => {
		cookieCutter.set('token');
		setAuth(false);
	};

	const value = {
		auth,
		login,
		logout
	};

	return (
		<>
			<AuthContext.Provider value={value}>
				{children}
			</AuthContext.Provider>
		</>
	);
};
