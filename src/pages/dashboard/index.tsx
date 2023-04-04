import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { cardsMenu } from './helpers';
import { DashboardCardContent, DashboardContainer } from './styles';

export function Dashboard() {
	const navigate = useNavigate();

	return (
		<DashboardContainer>
			<div>
				<h2>Um nova era de</h2>
				<h1>Operações financeiras automatizadas</h1>
			</div>

			<nav className="menu-items">
				{cardsMenu.map(({ background, disabled, goTo, logo, borderColor }) => (
					<Card
						onClick={() => navigate(goTo)}
						borderSize="84px"
						borderColor={borderColor}
						background={background}
						disabled={disabled}
					>
						<DashboardCardContent>
							<img src={logo} alt="logo" />
							<h3>Acessar</h3>
						</DashboardCardContent>
					</Card>
				))}
			</nav>
		</DashboardContainer>
	);
}
