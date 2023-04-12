export interface Author {
	id: string;
	name: string;
	avatar: string;
	status: 'online' | 'offline';
	blocked: boolean;
}

export interface Message {
	author: Author;
	trainingId: string;
	message: string;
}
