export interface LoginData {
	email: string;
	password: string;
}

export interface User {
	id: string;
	name: string;
	avatar: string;
	email: string;
	broker_id: string;
	role: string;
	terms: boolean;
	products: UserProduct[];
	created_at: string;
}

export interface Product {
	id: string;
	name: string;
}

export interface UserProduct extends Product {
	expiration: string;
}

export interface Live {
	id: string;
	productId: string;
	title: string;
	hash: string;
	description: string;
	status: string;
	created_at: string;
	updated_at: string;
}

export interface Training {
	id: string;
	productId: string;
	name: string;
	description: string;
	status: 'ACTIVE' | 'INACTIVE';
	created_at: string;
	updated_at: string;
}

export interface TrainingModule {
	id: string;
	trainingId: string;
	name: string;
	created_at: string;
	updated_at: string;
}

export interface Lesson {
	id: string;
	trainingModuleId: string;
	index: number;
	thumbnail: string;
	title: string;
	subTitle: string;
	description: string;
	url: string;
	created_at: string;
	updated_at: string;
}
