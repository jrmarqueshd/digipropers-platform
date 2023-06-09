import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { cardsMenu } from './helpers';
import { FwDashboardCardContent, FwDashboardContainer } from './styles';
import { useEffect, useState } from 'react';
import { getLive } from '../../services/internal/requests';
import { Live } from '../../services/internal/interfaces';
import manageStorage from '../../commons/helpers/manageStorage';
import { ProductSelected } from '../dashboard/interfaces';
import PageWrapper from '../../layouts/pageWrapper';

export function FwDashboard() {
	const [live, setLive] = useState<Live>();
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	const getDynamicGoto = (title: string) => {
		const userToken = manageStorage().get('STORAGE_TOKEN_KEY') as string;
		const product = manageStorage().get('STORAGE_PRODUCT_SELECTED') as ProductSelected;

		if (title.includes('operações')) return `?pid=${product.id}&ut=${userToken}`;

		return '';
	};

	const openUrl = (url: string, target?: boolean) => {
		const urlMounted = '/fabrica-de-win' + url;

		if (target) {
			return window.open(urlMounted, '_blank');
		}

		navigate(urlMounted);
	};

	useEffect(() => {
		async function fetch() {
			const response = await getLive();
			setLoading(false);
			if (!response) return;
			setLive(response);
		}

		fetch();
	}, []);

	return (
		<PageWrapper loading={loading}>
			<FwDashboardContainer>
				<nav className="menu-items">
					{cardsMenu.map(({ background, disabled, goTo, title, borderColor, external, target }) => (
						<Card
							onClick={() => !external && openUrl(goTo, target)}
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
		</PageWrapper>
	);
}
