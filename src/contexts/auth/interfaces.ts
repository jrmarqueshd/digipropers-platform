import { LoginData } from '../../services/internal/interfaces';

export interface User {
	id: string;
	name: string;
	email: string;
	broker_id: string;
	role: string;
	terms: boolean;
	products: [
		{
			id: string;
			name: string;
			expiration: string;
		},
		{
			id: string;
			name: string;
			expiration: string;
		},
	];
	created_at: string;
}

export interface AuthContextType {
	user: User;
	signin(data: LoginData): Promise<void>;
	signout: () => void;
	fetchUserData: () => Promise<void>;
}
