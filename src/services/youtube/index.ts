import axios from 'axios';

const api = axios.create({
	baseURL: `${import.meta.env.VITE_APP_YOUTUBE_API_BASE}/youtube/v3/videos`,
});

api.interceptors.request.use(
	(config) => {
		config.url = config.url + `&key=${import.meta.env.VITE_APP_YOUTUBE_API_KEY}`;

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default api;
