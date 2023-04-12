import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { factoryProductsList } from './helpers';
import { DashboardCardContent, DashboardContainer } from './styles';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/internal/requests';
import { Product } from '../../services/internal/interfaces';
import manageStorage from '../../commons/helpers/manageStorage';

export function Dashboard() {
	const [products, setProducts] = useState<Product[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		manageStorage().remove('STORAGE_PRODUCT_SELECTED');

		async function fetch() {
			const response = await getProducts();

			if (response) {
				setProducts(response);
			}
		}

		fetch();
	}, []);

	return (
		<DashboardContainer>
			<div>
				<h2>Um nova era de</h2>
				<h1>Operações financeiras automatizadas</h1>
			</div>

			<nav className="menu-items">
				{factoryProductsList(products).map(
					({ id, background, disabled, goTo, logo, borderColor, unavailable, name }) => (
						<Card
							onClick={() => {
								manageStorage().set('STORAGE_PRODUCT_SELECTED', {
									id,
									name,
									background,
									disabled,
									goTo,
									logo,
									borderColor,
									unavailable,
								});
								navigate(goTo);
							}}
							borderSize="84px"
							borderColor={borderColor}
							background={background}
							disabled={disabled || unavailable}
						>
							<DashboardCardContent>
								<img src={logo} alt="logo" />
								<h3>{unavailable ? 'Em breve' : 'Acessar'}</h3>
							</DashboardCardContent>
						</Card>
					),
				)}
			</nav>
		</DashboardContainer>
	);
}
