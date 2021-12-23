import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from 'react';
import cookieCutter from 'cookie-cutter';

type authContextType = {
	auth: boolean;
	login: (email: string, password: string) => void;
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
	token: string;
};

export const AuthProvider = ({ children, token }: Props) => {
	const [auth, setAuth] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			if (token) {
				const res = await fetch(
					'http://localhost:3000/api/auth/check-token',
					{
						method: 'GET',
						headers: {
							authorization: `Bearer ${token}`
						}
					}
				);
				res.ok ? setAuth(true) : logout();
			}
		})();
	}, []);

	const login = async (email: string, password: string) => {
		const res = await fetch('http://localhost:3000/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});

		const data = await res.json();

		if (!res.ok) {
			throw new Error(data.message);
		}

		cookieCutter.set('token', data.access_token);
		setAuth(true);
	};

	const logout = () => {
		cookieCutter.set('token', null, { expires: new Date(0) });
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
