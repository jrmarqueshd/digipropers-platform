import { toast } from 'react-toastify';
import api from '.';
import { LoginData, User } from './interfaces';
import manageStorage from '../../commons/helpers/manageStorage';

export const loginSession = async (data: LoginData) => {
	try {
		const response = await api.post('/sessions', { ...data });

		return response.data.accessToken as string;
	} catch {
		toast.error('Ocorreu um erro! Por favor, tente novamente.');
	}
};

export const getUser = async () => {
	try {
		const response = await api.get('/user');

		return response.data.user as User;
	} catch {
		toast.error('Ocorreu um erro! Por favor, tente novamente.');
	}
};

export const updateUser = async ({
	name,
	password,
	confirm_password,
}: Partial<Pick<User, 'name'>> & {
	password?: string;
	confirm_password?: string;
}) => {
	const user = manageStorage().get('STORAGE_USER_KEY') as User;

	const getPassword =
		password !== 'ocultPassword'
			? {
					password,
			  }
			: {};

	try {
		const response = await api.put(`/users/${user.id}`, { name, ...getPassword, terms: true });

		toast.success('Dados do usuário atualizados com sucesso!');

		return response.data.user as User;
	} catch {
		toast.error('Ocorreu um erro! Por favor, tente novamente.');
	}
};
