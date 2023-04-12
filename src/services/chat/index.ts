import io from 'socket.io-client';
import { User } from '../internal/interfaces';

const URL = import.meta.env.VITE_APP_SOCKET_BASE || 'http://localhost:5050';

const socket = ({ id, name, avatar }: User, trainingId: string) =>
	io(URL, {
		query: {
			userId: id,
			name,
			avatar,
			trainingId,
			status: 'online',
			blocked: false,
		},
	});

export default socket;
