import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { TrainingsCardContent, TrainingsContainer } from './styles';

export default function Trainings() {
	const navigate = useNavigate();

	const location = useLocation();

	const borderColor = {
		'/fabrica-de-win/treinamentos': '#A7CB22',
		'/metodo-prosper/treinamentos': '#CE3439',
		'/b3-pro/treinamentos': '#2B9BD7',
	};

	return (
		<TrainingsContainer>
			{Array.from({ length: 4 }, (i) => Number(i)).map((i) => (
				<Card
					onClick={() => navigate(`${location.pathname}/d516as6d1sa6das16d/1`)}
					borderSize="113px"
					borderColor={(borderColor as any)[location.pathname]}
					background="https://i0.wp.com/startup-studio.jp/wp-content/uploads/2021/01/phil-hearing-nfs0n3_d2xy-unsplash.jpg?fit=250%2C300&ssl=1"
					hiddenBorders={['top-left', 'bottom-right']}
				>
					<TrainingsCardContent>
						<h2>Lorem ipsum</h2>

						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</TrainingsCardContent>
				</Card>
			))}
		</TrainingsContainer>
	);
}
