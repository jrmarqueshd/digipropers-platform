import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { cardsMenu } from './helpers';
import { FwDashboardCardContent, FwDashboardContainer } from './styles';
import { useEffect, useState } from 'react';
import { getLive } from '../../services/internal/requests';
import { Live, User } from '../../services/internal/interfaces';
import manageStorage from '../../commons/helpers/manageStorage';
import { ProductSelected } from '../dashboard/interfaces';

export function FwDashboard() {
	const [live, setLive] = useState<Live>();

	const navigate = useNavigate();

	useEffect(() => {
		async function fetch() {
			const response = await getLive();
			if (response) {
				setLive(response);
			}
		}

		fetch();
	}, []);

	const getDynamicGoto = (title: string) => {
		const userToken = manageStorage().get('STORAGE_TOKEN_KEY') as string;
		const product = manageStorage().get('STORAGE_PRODUCT_SELECTED') as ProductSelected;

		if (title.includes('operações')) return `?pid=${product.id}&ut=${userToken}`;

		return '';
	};

	return (
		<FwDashboardContainer>
			<nav className="menu-items">
				{cardsMenu.map(({ background, disabled, goTo, title, borderColor, external }) => (
					<Card
						onClick={() => !external && navigate('/fabrica-de-win' + goTo)}
						borderSize="84px"
						borderColor={borderColor}
						background={background}
						disabled={disabled || (title === 'Ao Vivo' && !live)}
						hiddenBorders={['top-left', 'bottom-right']}
					>
						<FwDashboardCardContent
							{...(external ? { as: 'a', href: goTo + getDynamicGoto(title), target: '_blank' } : {})}
						>
							<h2>{title}</h2>
							<h3>{title === 'Ao Vivo' && !live ? 'Em breve' : 'Acessar'}</h3>
						</FwDashboardCardContent>
					</Card>
				))}
			</nav>
		</FwDashboardContainer>
	);
}
