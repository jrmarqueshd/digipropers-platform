import React from 'react';
import { useNavigate } from 'react-router-dom';
import manageStorage from '../../commons/helpers/manageStorage';
import { AuthContextType } from './interfaces';
import { fakeAuthProvider } from './helpers';
import { getUser, getUserProducts, loginSession } from '../../services/internal/requests';
import { LoginData } from '../../services/internal/interfaces';

const AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth() {
	return React.useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = React.useState<any>(manageStorage().get('STORAGE_USER_KEY'));

	const navigate = useNavigate();

	const token = fakeAuthProvider.isAuthenticated;

	const fetchUserData = async () => {
		const user = await getUser();
		manageStorage().set('STORAGE_USER_KEY', user);
		setUser(user);
	};

	const signin = async (data: LoginData) => {
		const token = await loginSession(data);

		if (!token) return;

		return fakeAuthProvider.signin(token, async () => {
			await fetchUserData();
			await getUserProducts();
			navigate('/', { replace: true });
			navigate(0);
		});
	};

	const signout = () => {
		return fakeAuthProvider.signout(() => {
			setUser(null);
			manageStorage().remove('STORAGE_USER_KEY');
			navigate('/login', { replace: true });
			navigate(0);
		});
	};

	const value = { user, token, signin, signout, fetchUserData };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
