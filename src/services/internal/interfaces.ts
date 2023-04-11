export interface LoginData {
	email: string;
	password: string;
}

export interface User {
	id: string;
	name: string;
	email: string;
	broker_id: string;
	role: string;
	terms: boolean;
	products: Product[];
	created_at: string;
}

export interface Product {
	id: string;
	name: string;
	expiration: string;
}
