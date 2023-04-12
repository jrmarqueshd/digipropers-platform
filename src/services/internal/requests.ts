import { toast } from 'react-toastify';
import api from '.';
import { Live, LoginData, Product, User, UserProduct } from './interfaces';
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
}: Partial<Pick<User, 'name'>> & {
	password?: string;
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

export const getProducts = async () => {
	try {
		const response = await api.get(`/products`);

		return response.data.product as Product[];
	} catch {
		toast.error('Ocorreu um erro! Por favor, tente novamente.');
	}
};

export const getUserProducts = async () => {
	try {
		const response = await api.get(`/products/user`);

		manageStorage().set('STORAGE_USER_PRODUCTS', response.data.product);

		return response.data.product as UserProduct[];
	} catch {
		toast.error('Ocorreu um erro! Por favor, tente novamente.');
	}
};

export const getLive = async () => {
	const productSelected = manageStorage().get('STORAGE_PRODUCT_SELECTED') as Product;

	try {
		const response = await api.get(`lives/${productSelected.id}`);

		return response.data?.[0] as Live;
	} catch {
		toast.error('Ocorreu um erro! Por favor, tente novamente.');
	}
};
