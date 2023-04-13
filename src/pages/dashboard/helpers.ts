import { slugify } from '../../commons/helpers/slugify';
import { Product, UserProduct } from '../../services/internal/interfaces';
import { ProductSelected } from './interfaces';
import manageStorage from '../../commons/helpers/manageStorage';
import { getProductAssets, productsAvailable } from '../../commons/helpers/getProductsAssets';

const unavailableProducts = ['b3', 'bot', 'metodo'];

export const factoryProductsList = (products: Product[]) => {
	const userProducts = manageStorage().get('STORAGE_USER_PRODUCTS') as UserProduct[];

	return products.map((product) => {
		let formattedProduct = {};

		productsAvailable.forEach((cardKey) => {
			if (slugify(product.name).includes(cardKey)) {
				const hasProduct = userProducts?.some?.((userProduct) => userProduct.id === product.id);

				formattedProduct = {
					...product,
					...getProductAssets(cardKey as 'fabrica' | 'b3' | 'bot' | 'metodo'),
					disabled: !hasProduct,
					unavailable: unavailableProducts.includes(cardKey),
				};
			}
		});

		return formattedProduct;
	}) as ProductSelected[];
};
