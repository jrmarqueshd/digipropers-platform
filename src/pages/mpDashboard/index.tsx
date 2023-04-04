import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { cardsMenu } from './helpers';
import { MpDashboardCardContent, MpDashboardContainer } from './styles';

export function MpDashboard() {
	const navigate = useNavigate();

	return (
		<MpDashboardContainer>
			<nav className="menu-items">
				{cardsMenu.map(({ background, disabled, goTo, title, borderColor, external }) => (
					<Card
						onClick={() => !external && navigate('/metodo-prosper' + goTo)}
						borderSize="84px"
						borderColor={borderColor}
						background={background}
						disabled={disabled}
						hiddenBorders={['top-left', 'bottom-right']}
					>
						<MpDashboardCardContent {...(external ? { as: 'a', href: goTo } : {})}>
							<h2>{title}</h2>
							<h3>Acessar</h3>
						</MpDashboardCardContent>
					</Card>
				))}
			</nav>
		</MpDashboardContainer>
	);
}
