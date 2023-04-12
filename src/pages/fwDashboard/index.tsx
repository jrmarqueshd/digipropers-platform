import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { cardsMenu } from './helpers';
import { FwDashboardCardContent, FwDashboardContainer } from './styles';
import { useEffect, useState } from 'react';
import { getLive } from '../../services/internal/requests';
import { Live } from '../../services/internal/interfaces';

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
						<FwDashboardCardContent {...(external ? { as: 'a', href: goTo, target: '_blank' } : {})}>
							<h2>{title}</h2>
							<h3>{!live ? 'Em breve' : 'Acessar'}</h3>
						</FwDashboardCardContent>
					</Card>
				))}
			</nav>
		</FwDashboardContainer>
	);
}
