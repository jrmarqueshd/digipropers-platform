import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { factoryProductsList } from './helpers';
import { DashboardCardContent, DashboardContainer } from './styles';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/internal/requests';
import { Product } from '../../services/internal/interfaces';
import manageStorage from '../../commons/helpers/manageStorage';
import { useLoading } from '../../contexts/loading';
import { useAuth } from '../../contexts/auth';

export function Dashboard() {
	const [products, setProducts] = useState<Product[]>([]);

	const navigate = useNavigate();
	const { setLoading: setLoadingGlobal } = useLoading();
	const auth = useAuth();

	useEffect(() => {
		manageStorage().remove('STORAGE_PRODUCT_SELECTED');

		async function fetch() {
			setLoadingGlobal(true);
			const response = await getProducts();

			setLoadingGlobal(false);

			if (!response) return auth.signout();

			setProducts(response);
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
