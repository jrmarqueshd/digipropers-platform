import axios from 'axios';
import manageStorage from '../../commons/helpers/manageStorage';
import { toast } from 'react-toastify';

const api = axios.create({
	baseURL: `${import.meta.env.VITE_APP_API_BASE}`,
});

api.interceptors.request.use(
	(config) => {
		const Authorization = manageStorage().get('STORAGE_TOKEN_KEY');

		const urlToIgnoreAuth = ['/login'];

		if (urlToIgnoreAuth.every((url) => url !== config.url) && Authorization)
			Object.assign(config?.headers || {}, { Authorization: `Bearer ${Authorization}` });

		if (config.url === '/import') Object.assign(config?.headers || {}, { 'content-type': 'multipart/form-data' });

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			localStorage.clear();
			window.location.replace('/login');
			return;
		}

		throw Promise.reject(error);
	},
);

export default api;
