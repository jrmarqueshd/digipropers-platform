import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { cardsMenu } from './helpers';
import { FwDashboardCardContent, FwDashboardContainer } from './styles';

export function FwDashboard() {
	const navigate = useNavigate();

	return (
		<FwDashboardContainer>
			<nav className="menu-items">
				{cardsMenu.map(({ background, disabled, goTo, title, borderColor, external }) => (
					<Card
						onClick={() => !external && navigate('/fabrica-de-win' + goTo)}
						borderSize="84px"
						borderColor={borderColor}
						background={background}
						disabled={disabled}
						hiddenBorders={['top-left', 'bottom-right']}
					>
						<FwDashboardCardContent {...(external ? { as: 'a', href: goTo } : {})}>
							<h2>{title}</h2>
							<h3>Acessar</h3>
						</FwDashboardCardContent>
					</Card>
				))}
			</nav>
		</FwDashboardContainer>
	);
}
