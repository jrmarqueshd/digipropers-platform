import { ProductAvailable, ProductsAvailableContainer } from './styles';

import MpLogo from '/images/mp-logo.png';
import FwLogo from '/images/fw-logo.png';
import BpLogo from '/images/db-logo.png';
import B3Logo from '/images/b3-logo.png';
import { useEffect, useState } from 'react';
import manageStorage from '../../commons/helpers/manageStorage';
import { UserProduct } from '../../services/internal/interfaces';
import { getProductAssets, productsAvailable } from '../../commons/helpers/getProductsAssets';
import { slugify } from '../../commons/helpers/slugify';
import moment from 'moment';

export default function ProductsAvailable() {
	const [userProducts, setUserProducts] = useState<any[]>([]);

	useEffect(() => {
		const _userProducts = manageStorage().get('STORAGE_USER_PRODUCTS') as UserProduct[];

		const products = _userProducts
			.map((product) => {
				let formattedProduct = {};

				productsAvailable.forEach((cardKey) => {
					if (slugify(product.name).includes(cardKey)) {
						const hasProduct = _userProducts?.some?.((userProduct) => userProduct.id === product.id);

						formattedProduct = {
							...product,
							...getProductAssets(cardKey as 'fabrica' | 'b3' | 'bot' | 'metodo'),
							disabled: !hasProduct,
						};
					}
				});

				return formattedProduct;
			})
			.filter((e) => !(e as any).disabled);

		setUserProducts(products);
	}, []);

	return (
		<ProductsAvailableContainer>
			<h3>Produtos com acesso</h3>

			{userProducts.map((product, index) => (
				<ProductAvailable key={String(index)}>
					<img src={product.logo} />
					<span>até {moment(product.expiration).format('DD/MM/YYYY')}</span>
				</ProductAvailable>
			))}
		</ProductsAvailableContainer>
	);
}
