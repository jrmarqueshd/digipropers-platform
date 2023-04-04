import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { cardsMenu } from './helpers';
import { B3DashboardCardContent, B3DashboardContainer } from './styles';

export function B3Dashboard() {
	const navigate = useNavigate();

	return (
		<B3DashboardContainer>
			<nav className="menu-items">
				{cardsMenu.map(({ background, disabled, goTo, title, borderColor, external }) => (
					<Card
						onClick={() => !external && navigate('/b3-pro' + goTo)}
						borderSize="84px"
						borderColor={borderColor}
						background={background}
						disabled={disabled}
						hiddenBorders={['top-left', 'bottom-right']}
					>
						<B3DashboardCardContent {...(external ? { as: 'a', href: goTo } : {})}>
							<h2>{title}</h2>
							<h3>Acessar</h3>
						</B3DashboardCardContent>
					</Card>
				))}
			</nav>
		</B3DashboardContainer>
	);
}
