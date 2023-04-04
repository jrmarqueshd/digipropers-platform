import { useNavigate } from 'react-router-dom';
import { BpBotCard, BpDashboardContainer } from './styles';

import LockIcon from '/icons/lock-icon.png';

const botsMocks = [
	{
		name: 'Bot 1',
		premium: true,
		enable: false,
	},
	{
		name: 'Bot 2',
		premium: false,
		enable: false,
	},
	{
		name: 'Bot 3',
		premium: true,
		enable: true,
	},
	{
		name: 'Bot 4',
		premium: false,
		enable: true,
	},
];

export function BpDashboard() {
	const navigate = useNavigate();

	return (
		<BpDashboardContainer>
			{botsMocks.map(({ enable, name, premium }) => (
				<BpBotCard onClick={() => enable && navigate('dsakldsald')} premium={premium} disabled={!enable}>
					<h3>{name}</h3>
					<span>{premium ? 'Edições especiais' : 'Padrão'}</span>
					{!enable && <img src={LockIcon} className="lock-icon" alt="Disabled" />}
				</BpBotCard>
			))}
		</BpDashboardContainer>
	);
}
