import { toast } from 'react-toastify';
import api from '.';

export const getYouTubeLiveInfos = async (live_id: string) => {
	try {
		const response = api
			.get(`?part=liveStreamingDetails&id=${live_id}`)
			.then((response) => {
				const liveStreamingDetails = response.data.items[0].liveStreamingDetails;

				return liveStreamingDetails;
			})
			.catch((error) => {
				console.error(error);
			});

		return response;
	} catch {
		toast.error('Ocorreu um erro! Por favor, tente novamente.');
	}
};
